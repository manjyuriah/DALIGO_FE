import React, { useState } from "react";
import Modal from "./Modal";

const ModalPage = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }

    Modal.defaultProps = {
        closable: true,
        maskClosable: true,
        visible: false
    }

    return(
        <>
            <button onClick={openModal}>열려라 모달아</button>
            {
                modalVisible && <Modal
                    visible={ modalVisible }
                    closable={ true }
                    maskClosable={ true }
                    onClose={closeModal}>
                    반가워ㅋㅋㅋ
                </Modal>
            }
        </>
    )
}
export default ModalPage;