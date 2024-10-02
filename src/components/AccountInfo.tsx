import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AccountInfo.scss';
import AccordionItem from './AccordionItem';

interface AccountProps {
  name: React.ReactNode;
  bank: string;
  kakaopayLink?: string;
}

const Account: React.FC<AccountProps> = ({ name, bank, kakaopayLink }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(bank).then(
      () => {
        toast.success("클립보드에 복사되었습니다.", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
      (err) => {
        console.error('클립보드 복사 실패:', err);
        toast.error("클립보드 복사에 실패했습니다.");
      }
    );
  };

  return (
    <div className="account-item">
      <h3>{name}</h3>
      <p>{bank}</p>
      <button onClick={copyToClipboard} className="account-button">
        계좌번호 복사
      </button>
      {kakaopayLink && (
        <a href={kakaopayLink} target="_blank" rel="noopener noreferrer" className="kakaopay-button">
          카카오페이로 보내기
        </a>
      )}
    </div>
  );
};

const AccountInfo: React.FC = () => {
  return (
    <div className="account-info">
      <AccordionItem title="신랑 & 신부">
        <div className="main-accounts">
          <Account
            name={`신랑 ${import.meta.env.VITE_GROOM_NAME}`}
            bank={import.meta.env.VITE_GROOM_ACCOUNT}
            kakaopayLink="https://qr.kakaopay.com/신랑의카카오페이링크"
          />
          <Account
            name={`신부 ${import.meta.env.VITE_BRIDE_NAME}`}
            bank={import.meta.env.VITE_BRIDE_ACCOUNT}
            kakaopayLink="https://qr.kakaopay.com/신부의카카오페이링크"
          />
        </div>
      </AccordionItem>

      <AccordionItem title="부모님">
        <div className="parent-accounts">
          <div className="groom-parents">
            <h4>신랑 측</h4>
            <Account
              name={<>
                아버지 {import.meta.env.VITE_GROOM_FATHER_NAME} <br /> 
                어머니 {import.meta.env.VITE_GROOM_MOTHER_NAME}
              </>}
              bank={import.meta.env.VITE_GROOM_MOTHER_ACCOUNT}
            />
          </div>
          <div className="bride-parents">
            <h4>신부 측</h4>
            <Account
              name={<>
                아버지 {import.meta.env.VITE_BRIDE_FATHER_NAME} <br /> 
                어머니 {import.meta.env.VITE_BRIDE_MOTHER_NAME}
              </>}
              bank={import.meta.env.VITE_BRIDE_MOTHER_ACCOUNT}
            />
          </div>
        </div>
      </AccordionItem>
      <p>신랑 신부에게 축하의 마음을 전해주세요.</p>

      <ToastContainer />
    </div>
  );
};

export default AccountInfo;