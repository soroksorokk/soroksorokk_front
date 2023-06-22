import React, { useState } from 'react';
import Button from '../../UI/Button';
import { ReactComponent as AgreeSign } from '../../assets/AgreeSign.svg';

const TermsOfUse = () => {
  /* 전체 동의 state, 개별 동의 state */
  const [allAgree, setAllAgree] = useState(false);
  const [agree, setAgree] = useState({
    termsAgree: false,
    personalInfoAgree: false,
    optionalPersonalInfoAgree: false,
    salesInfoAgree: false,
    ageAgree: false,
  });

  interface agreeProps {
    [key: string]: boolean;
    termsAgree: boolean;
    personalInfoAgree: boolean;
    optionalPersonalInfoAgree: boolean;
    salesInfoAgree: boolean;
    ageAgree: false;
  }

  /* 전체 동의 state 변경 함수 */
  const handleAgreeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgree((preAgree) => ({ ...preAgree, [name]: checked }));

    const allChecked = Object.values({ ...agree, [name]: checked }).every(
      (value) => value === true,
    );
    setAllAgree(allChecked);
  };

  const handleAllAgreementCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const newAgreements = Object.keys(agree).reduce((newAgree, agreeKey) => {
      newAgree[agreeKey] = checked;
      return newAgree;
    }, {} as agreeProps);
    setAgree(newAgreements);
    setAllAgree(checked);
  };

  /* 항목별 text */
  const allAgreeCheckText = '전체 동의합니다';
  const allAgreeCheckDescText =
    '선택 항목에 동의하지 않은 경우도 일반적인 서비스를 이용할 수 있습니다';
  const termsAgreeText = '이용약관 동의';
  const personalInfoAgreeText = '개인정보 수집 및 이용 동의';
  const optionalPersonalInfoAgreeText = '개인정보 수집 및 이용 동의';
  const salesInfoAgreeText = '알림 push 등 정보/혜택 수신 동의';
  const ageAgreeText = '본인은 만 14세 이상입니다.';

  return (
    <div>
      <div className="my-6">
        <input
          type="checkbox"
          id="allAgree"
          name="allAgree"
          className="hidden"
          checked={allAgree}
          onChange={handleAllAgreementCheck}
        ></input>
        <label htmlFor="allAgree" className="flex cursor-pointer items-center">
          <AgreeSign
            className={`h-6 w-6 ${
              allAgree ? 'fill-[#9664FF]' : 'fill-[#999999]'
            }`}
          />
          <h3 className="cursor-pointer px-3">{allAgreeCheckText}</h3>
        </label>
      </div>
      <p className="text-xs text-gray">{allAgreeCheckDescText}</p>
      <div className="my-6 text-sm text-[#292929]">
        <input
          type="checkbox"
          id="termsAgree"
          name="termsAgree"
          className="hidden"
          checked={agree.termsAgree}
          onChange={handleAgreeCheck}
        ></input>
        <label
          htmlFor="termsAgree"
          className="flex cursor-pointer items-center"
        >
          <AgreeSign
            className={
              'h-6 w-6' +
              (agree.termsAgree ? ' fill-[#9664FF]' : ' fill-[#999999]')
            }
          />
          <span className="cursor-pointer px-3">{termsAgreeText}</span>
          <span className="text-gray">{`(필수)`}</span>
        </label>
      </div>
      <div className="my-6 text-sm text-[#292929]">
        <input
          type="checkbox"
          id="personalInfoAgree"
          name="personalInfoAgree"
          className="hidden"
          checked={agree.personalInfoAgree}
          onChange={handleAgreeCheck}
        ></input>
        <label
          htmlFor="personalInfoAgree"
          className="flex cursor-pointer items-center"
        >
          <AgreeSign
            className={
              'h-6 w-6' +
              (agree.personalInfoAgree ? ' fill-[#9664FF]' : ' fill-[#999999]')
            }
          />
          <span className="cursor-pointer px-3">{personalInfoAgreeText}</span>
          <span className="text-gray">{`(필수)`}</span>
        </label>
      </div>
      <div className="my-6 text-sm text-[#292929]">
        <input
          type="checkbox"
          id="optionalPersonalInfoAgree"
          name="optionalPersonalInfoAgree"
          className="hidden"
          checked={agree.optionalPersonalInfoAgree}
          onChange={handleAgreeCheck}
        ></input>
        <label
          htmlFor="optionalPersonalInfoAgree"
          className="flex cursor-pointer items-center"
        >
          <AgreeSign
            className={
              'h-6 w-6' +
              (agree.optionalPersonalInfoAgree
                ? ' fill-[#9664FF]'
                : ' fill-[#999999]')
            }
          />
          <span className="cursor-pointer px-3">
            {optionalPersonalInfoAgreeText}
          </span>{' '}
          <span className="text-gray">{`(선택)`}</span>
        </label>
      </div>
      <div className="my-6 text-sm text-[#292929]">
        <input
          type="checkbox"
          id="salesInfoAgree"
          name="salesInfoAgree"
          className="hidden"
          checked={agree.salesInfoAgree}
          onChange={handleAgreeCheck}
        ></input>
        <label
          htmlFor="salesInfoAgree"
          className="flex cursor-pointer items-center"
        >
          <AgreeSign
            className={
              'h-6 w-6' +
              (agree.salesInfoAgree ? ' fill-[#9664FF]' : ' fill-[#999999]')
            }
          />
          <span className="cursor-pointer px-3">{salesInfoAgreeText}</span>
          <span className="text-gray">{`(선택)`}</span>
        </label>
      </div>
      <div className="my-6 text-sm text-[#292929]">
        <input
          type="checkbox"
          id="ageAgree"
          name="ageAgree"
          className="hidden"
          checked={agree.ageAgree}
          onChange={handleAgreeCheck}
        ></input>
        <label htmlFor="ageAgree" className="flex cursor-pointer items-center">
          <AgreeSign
            className={
              'h-6 w-6' +
              (agree.ageAgree ? ' fill-[#9664FF]' : ' fill-[#999999]')
            }
          />
          <span className="cursor-pointer px-3">{ageAgreeText}</span>
          <span className="text-gray">{`(필수)`}</span>
        </label>
      </div>
    </div>
  );
};

export default TermsOfUse;

// 스테이트
// const [allAgreed, setAllAgreed] = useState(false);
// const [agreements, setAgreements] = useState({
//   termsAgreed: false,
//   personalInfoAgreed: false,
//   provisionAgreed: false,
//   locationAlarmAgreed: false,
//   serviceAlarmAgrred: false,
// });

// 이벤트 핸들러
// const handleAgreementChange = (e: any) => {
//   const { name, checked } = e.target;

//   setAgreements((preAgreements: any) => ({...preAgreements, [name]:checked}))
//   const allChecked = Object.values({...agreements, [name]: checked})
//   .every((val: any) => val === true);
//   setAllAgreed(allChecked)

// }

// const handleAllAgreementChange = (e: any) => {
//   const { checked } = e.target;
//   setAgreements((preAgreements) => Object.keys(preAgreements).reduce((...newAgreements, agreementKey) => ({
//     ...newAgreements,
//     [agreementKey] : checked
//   }),
//   {}
//   )
//   )
//   setAgreements(checked)
// }

// // jsx
// <input type='checkbox' id='agree_check_all' name='agree_check_all' checked={allAgreed}
// onChange={handle} />
