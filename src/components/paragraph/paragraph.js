function Paragraph(props) {
    return (
        <p style={{ color: props.text_color }}>
            {props.children.toUpperCase()}
        </p>
    )
}

export default Paragraph