import Alert from "../components/common/Alert";

function AlertPage() {
    return (
        <div>
            <Alert severity='error'>This is an error alert</Alert>
            <Alert severity='warning'>This is an warning alert</Alert>
            <Alert severity='info'>This is an info alert</Alert>
            <Alert severity='success'>This is an success alert</Alert>
        </div>
    )
}

export default AlertPage;
