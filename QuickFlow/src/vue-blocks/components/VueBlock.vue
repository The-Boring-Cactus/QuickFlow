<template>
    <div class="vue-block" :class="{selected: selected}" :style="style">
        <header :style="headerStyle">
            {{title}}
            <a class="delete" @click="deleteBlock">x</a>
        </header>
        <div class="inputs">
            <div class="input" v-for="(slot, index) in inputs" :key="index">
                <div class="circle inputSlot" :class="{active: slot.active}"
                     @mouseup="slotMouseUp($event, index)"
                     @mousedown="slotBreak($event, index)"></div>
                {{slot.label}}
            </div>
        </div>
        <div class="outputs">
            <div class="output" v-for="(slot, index) in outputs" :key="index">
                <div class="circle" :class="{active: slot.active}"
                     @mousedown="slotMouseDown($event, index)"></div>
                {{slot.label}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VueBlock',
    props: {
      x: {
        type: Number,
        default: 0,
        validator: function (val) {
          return typeof val === 'number'
        }
      },
      y: {
        type: Number,
        default: 0,
        validator: function (val) {
          return typeof val === 'number'
        }
      },
      selected: Boolean,
      title: {
        type: String,
        default: 'Title'
      },
      inputs: Array,
      outputs: Array,
      options: {
        type: Object
      }
    },
    created () {
      this.mouseX = 0
      this.mouseY = 0
      this.lastMouseX = 0
      this.lastMouseY = 0
      this.linking = false
      this.dragging = false
    },
    mounted () {
      document.documentElement.addEventListener('mousemove', this.handleMove, true)
      document.documentElement.addEventListener('mousedown', this.handleDown, true)
      document.documentElement.addEventListener('mouseup', this.handleUp, true)
    },
    beforeDestroy () {
      document.documentElement.removeEventListener('mousemove', this.handleMove, true)
      document.documentElement.removeEventListener('mousedown', this.handleDown, true)
      document.documentElement.removeEventListener('mouseup', this.handleUp, true)
    },
    data () {
      return {
        width: this.options.width,
        hasDragged: false
      }
    },
    methods: {
      handleMove (e) {
        this.mouseX = e.pageX || e.clientX + document.documentElement.scrollLeft
        this.mouseY = e.pageY || e.clientY + document.documentElement.scrollTop
        if (this.dragging && !this.linking) {
          let diffX = this.mouseX - this.lastMouseX
          let diffY = this.mouseY - this.lastMouseY
          this.lastMouseX = this.mouseX
          this.lastMouseY = this.mouseY
          this.moveWithDiff(diffX, diffY)
          this.hasDragged = true
        }
      },
      handleDown (e) {
        this.mouseX = e.pageX || e.clientX + document.documentElement.scrollLeft
        this.mouseY = e.pageY || e.clientY + document.documentElement.scrollTop
        this.lastMouseX = this.mouseX
        this.lastMouseY = this.mouseY
        const target = e.target || e.srcElement
        if (this.$el.contains(target) && e.which === 1) {
          this.dragging = true
          this.$emit('select')
          if (e.preventDefault) e.preventDefault()
        }
      },
      handleUp () {
        if (this.dragging) {
          this.dragging = false
          if (this.hasDragged) {
            this.save()
            this.hasDragged = false
          }
        }
        if (this.linking) {
          this.linking = false
        }
      },
      // Slots
      slotMouseDown (e, index) {
        this.linking = true
        this.$emit('linkingStart', index)
        if (e.preventDefault) e.preventDefault()
      },
      slotMouseUp (e, index) {
        this.$emit('linkingStop', index)
        if (e.preventDefault) e.preventDefault()
      },
      slotBreak (e, index) {
        this.linking = true
        this.$emit('linkingBreak', index)
        if (e.preventDefault) e.preventDefault()
      },
      save () {
        this.$emit('update')
      },
      deleteBlock () {
        this.$emit('delete')
      },
      moveWithDiff (diffX, diffY) {
        let left = this.x + diffX / this.options.scale
        let top = this.y + diffY / this.options.scale
        this.$emit('update:x', left)
        this.$emit('update:y', top)
      }
    },
    computed: {
      style () {
        return {
          top: this.options.center.y + this.y * this.options.scale + 'px',
          left: this.options.center.x + this.x * this.options.scale + 'px',
          width: this.width + 'px',
          transform: 'scale(' + (this.options.scale + '') + ')',
          transformOrigin: 'top left'
        }
      },
      headerStyle () {
        return {
          height: this.options.titleHeight + 'px'
        }
      }
    }
  }
</script>

<style lang="css" scoped>
    .vue-block {
        position: absolute;
        box-sizing: border-box;
        border: 1px solid black;
        background: white;
        z-index: 1;
        opacity: 0.9;
        cursor: move;
    }

        .vue-block.selected {
            border: 1px solid red;
            z-index: 2;
        }

        .vue-block > header {
            background: #bfbfbf;
            text-align: center;
        }

            .vue-block > header > .delete {
                color: red;
                cursor: pointer;
                float: right;
                position: absolute;
                right: 5px;
            }

        .vue-block .inputs,
        .vue-block .outputs {
            padding: 2px 0;
            display: block;
            width: 50%;
        }

            .vue-block .inputs > *,
            .vue-block .outputs > * {
                width: 100%;
            }

        .vue-block .circle {
            box-sizing: border-box;
            margin-top: 3px;
            width: 10px;
            height: 10px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 100%;
            cursor: crosshair;
        }

            .vue-block .circle.active {
                background: #FFFF00;
            }

        .vue-block .inputs {
            float: left;
            text-align: left;
            margin-left: -6px;
        }

        .vue-block .input,
        .vue-block .output {
            height: 16px;
            overflow: hidden;
            font-size: 14px;
        }

        .vue-block .input {
            float: left;
        }

            .vue-block .input .circle {
                float: left;
                margin-right: 2px;
            }

                .vue-block .input .circle:hover {
                    background: #00FF00;
                }

                    .vue-block .input .circle:hover.active {
                        background: #FF0000;
                    }

        .vue-block .outputs {
            float: right;
            text-align: right;
            margin-right: -6px;
        }

        .vue-block .output {
            float: right;
        }

            .vue-block .output .circle {
                float: right;
                margin-left: 2px;
            }

                .vue-block .output .circle:hover {
                    background: #00FF00;
                }

</style>