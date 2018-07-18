export default {
    name: 'table',
    icon: 'fa-table',
    title: '插入表格',
    action: {
        request: {
            title: '插入表格',
            type: 'form',
            body: [
                {
                    name: 'row',
                    title: '行数',
                    type: 'dialog-input',
                    default: '3'
                },
                {
                    name: 'col',
                    title: '列数',
                    type: 'dialog-input',
                    default: '2'
                },
                {
                    name: 'align',
                    title: '对齐方式',
                    type: 'dialog-select',
                    param: {
                        options: [
                            {
                                title: '左对齐',
                                value: 1
                            },
                            {
                                title: '居中',
                                value: 2
                            },
                            {
                                title: '右对齐',
                                value: 3
                            }
                        ]
                    },
                    default: 0
                }
            ],
            callback (data) {
                let rowString = ''
                for (let i = 0; i < data.col; i++) {
                    rowString += '|  '
                }
                rowString += '|'

                let divString = ''
                for (let i = 0; i < data.col; i++) {
                    if (data.align === 1) { divString += '| :----------- ' } else if (data.align === 2) { divString += '| :----------: ' } else if (data.align === 3) { divString += '| -----------: ' } else { divString += '| -----------: ' }
                }

                divString += '|'

                let outputString = rowString + '\n' + divString + '\n'

                for (let i = 0; i < data.row - 1; i++) {
                    outputString += rowString + '\n'
                }

                return outputString
            }
        }
    }
}
