( function( blocks, editor, element ) {
    var el = element.createElement;
    var RichText = editor.RichText;

    blocks.registerBlockType( 'mkaz/test-block', {
        title: 'Test Heading',
        icon: 'smiley',
        category: 'widgets',

        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'h1',
            },
        },
        edit: function( props ) {
            var content = props.attributes.content;
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            return el(
                RichText,
                {
                    tagName: 'h1',
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                }
            );
        },

        save: function( props ) {
            return el( RichText.Content, {
                tagName: 'h1', value: props.attributes.content,
            } );
        },
    } );
}(
    window.wp.blocks,
    window.wp.editor,
    window.wp.element
) );
