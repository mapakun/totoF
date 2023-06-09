import { useState } from "react";
import Modal from '../../components/modal/modal.js';
import * as common from 'api/axios/axiosFunc.js';

function GameInfo()
{
  // 공용axios 테스트 start
    const liveScoreTest = () => {
      console.log('라이브스코어테스트');
      //inputId : "크앙" , inputPw : "그앙"
      const test = {inputId:'크앙',inputPw:'그앙'};
      common.commonAxios("post","/gameinfo/test",test,testCallBack);
      }
      function testCallBack(res)
      {
        console.log("콜백함수 테스트 입니다 잘오면 반응합니다.");
        console.log(res);
      }
  // 공용axios 테스트 end
    

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
            <div id="infoTest" onClick={liveScoreTest}>경기정보 테스트</div>

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