import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SpinnerLoad() {
  return (
    <Spinner animation="border" role="status" className="spinnerLoading" />
  );
}
