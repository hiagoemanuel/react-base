import showAlert from "../../services/show-alert/show-alert"

function Button({ label }) {
    return (
        <button className="btn-style" onClick={() => showAlert(label)}>
            {label}
        </button>
    )
}

export default Button