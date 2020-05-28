import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NonPreferredBehaviors from "./nonPreferredBehaviors";

const BehaviorModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} className="Modal-Button">
        Monitor {props.name}'s Behavior
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
        <ModalBody>
          <NonPreferredBehaviors />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Select Student's Behavior(s)
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BehaviorModal;
