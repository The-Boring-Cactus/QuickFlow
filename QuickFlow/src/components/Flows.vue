<template>
    <div id="Flows">
        <div color="grey lighten-4"
                tile>
            <v-toolbar dense >
                <v-btn v-for="block in blocks" :key="block.name"
                            class="ma-2" style="width:150px;"
                           @click="addBlock(block.name)">
                            {{block.title || block.name}}
                    </v-btn>
            </v-toolbar>
        </div>
            <VueBlocksContainer ref="container"
                                :blocksContent="blocks"
                                :scene.sync="scene"
                                @blockSelect="selectBlock"
                                @blockDeselect="deselectBlock"
                                class="container" />

        <VueBlockProperty  v-bind:inputValues="selectedBlockProperty" @save="saveProperty" />


    </div>
</template>

<script>
    import merge from 'deepmerge'
    import VueBlocksContainer from '../vue-blocks'
    import VueBlockProperty from '../vue-blocks/components/VueBlockProperty'

    export default {
        name: 'Flows',
        components: {
            VueBlocksContainer,
            VueBlockProperty
        },
        data: function () {
            return {
                blocks: [
                    {
                        name: 'text',
                        title: 'Request',
                        type: 'Text',
                        description: 'Request Name',
                        fields: [
                            {
                                name: 'MessageTitle',
                                label: 'Title',
                                type: 'string',
                                attr: 'property',
                                value: 'Request Title'
                            },
                            {
                                name: 'onRequest',
                                type: 'init',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'Approver',
                        title: 'Approver',
                        type: 'Approver',
                        description: 'Approver',
                        fields: [
                            {
                                name: 'ApproverTitle',
                                label: 'Level',
                                type: 'Combobox',
                                attr: 'property',
                                value: 'Approver Level'
                            },
                            {
                                name: 'inRequest',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'onRequest',
                                type: 'event',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'decision',
                        title: 'Decision (Yes/No)',
                        type: 'logic',
                        description: 'Decision Logic',
                        fields: [
                            {
                                name: 'inRequest',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'onAcept',
                                type: 'event',
                                attr: 'output'
                            },
                            {
                                name: 'onReject',
                                type: 'event',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'Attachment',
                        family: 'Files',
                        description: '',
                        fields: [
                            {
                                name: 'file',
                                label: 'File Name',
                                type: 'inputfile',
                                attr: 'property'
                            },
                            {
                                name: 'onAttach',
                                type: 'event',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'textarea',
                        title: 'Description',
                        type: 'Texttarea',
                        description: 'Request Description',
                        fields: [
                            {
                                name: 'MessageTitle',
                                label: 'Title',
                                type: 'string',
                                attr: 'property',
                                value: 'Request Title'
                            },
                            {
                                name: 'onRequest',
                                type: 'event',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'Start',
                        title: 'Start',
                        type: 'Begin',
                        description: 'Begin',
                        fields: [
                            {
                                name: 'inReject',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'Title',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'Description',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'Attachment',
                                type: 'event',
                                attr: 'input'
                            },
                            {
                                name: 'onRequest',
                                type: 'event',
                                attr: 'output'
                            }
                        ]
                    },
                    {
                        name: 'End',
                        title: 'End',
                        type: 'End',
                        description: 'End',
                        fields: [
                            {
                                name: 'inEnd',
                                type: 'event',
                                attr: 'input'
                            }
                        ]
                    }
                ],
                scene: {
                    blocks: [
                        
                    ],
                    links: [
                       
                    ],
                    container: {
                        centerX: 1042,
                        centerY: 140,
                        scale: 1
                    }
                },
                selectedBlock: null
            }
        },
        computed: {
            selectedBlockProperty() {
                if (this.selectedBlock == null) {
                    return null
                }
                console.log(this.selectedBlock.values)
                return this.selectedBlock.values
            },
            selectBlocksType() {
                return this.blocks.map(b => {
                    return b.family
                }).filter((value, index, array) => {
                    return array.indexOf(value) === index
                })
            }
        },
        methods: {
            selectBlock(block) {
                this.selectedBlock = block
            },
            deselectBlock(block) {
                if (block == this.selectedBlock)
                    this.selectedBlock = null
                this.selectedBlock = null
            },
            filteredBlocks(type) {
                return this.blocks.filter(value => {
                    return value.family === type
                })
            },
            saveProperty(val) {
                console.log(val)
                let scene = this.scene
                let block = scene.blocks.find(b => {
                    return b.id === this.selectedBlock.id
                })
                block.values.property = val
                this.scene = merge({}, scene)
            },
            addBlock(name) {
                this.$refs.container.addNewBlock(name)
            }
        },
        watch: {
            blocks(newValue) {
                console.log('blocks', JSON.stringify(newValue))
            },
            scene(newValue) {
                console.log('scene', JSON.stringify(newValue))
            }
        }
    }
</script>

<style lang="css">
    
    #Flows {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        padding: 20px 0 0 20px;
    }

    .container {
        width: 100%;
        height: calc(85% - 50px);
        border: 1px solid #096e37;
    }

       
</style>