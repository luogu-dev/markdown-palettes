export default function header(level) {
    return {
        name: 'h' + level,
        icon: 'icon-blold',
        content: 'H' + level,
        title: level + '级标题',
        action: {
            insert: function () {
                let output = "";
                for(let i = 0;i < level; i++) {
                    output += "#"
                }
                return output + " "
            }
        }
    }
}