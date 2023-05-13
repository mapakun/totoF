import { useState } from "react";
import Modal from '../../components/modal/modal.js';

function GameInfo()
{


    //모달관련 useState & function
    const [ModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };

      const closeModal = () => {
        setModalOpen(false);
      };

    return(
        <div>
            <div id="infoTest">경기정보 테스트</div>

            {/* 모달관련 정보 */}
            <div id="modalTest" onClick={openModal}>모달테스트</div>
            <Modal open={ModalOpen} close={closeModal} header="헤더텍스트">
            {/* Modal.js <main> {props.children} </main>에 내용이 입력 */}
            어디서든 Modal 함수 모달컴포넌트를 호출하여 사용하세요.<br />
            close시 원하는 이벤트를 줄 수 있게 좀 더 나누면 좋을 것 같다.
            </Modal>
        </div>
    );
}

export default GameInfo;