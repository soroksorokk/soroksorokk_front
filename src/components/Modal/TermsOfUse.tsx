import React, { useState } from 'react';
import Button from '../../UI/Button';
import { ReactComponent as AgreeSign } from '../../assets/AgreeSign.svg';

const TermsOfUse = () => {
  /* 전체 동의 state */
  const [allAgree, setAllAgree] = useState(false);

  /* 개별 동의 state */
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
    // e.target에서 e.target.name을 {name}으로, e.target.checked을 구조분해 할당으로 가져옴
    // e.target.name은 체크박스의 name을 가져옴
    // e.target.checked는 체크박스가 체크되었는지 아닌지를 boolean으로 알려줌
    const { name, checked } = e.target;
    setAgree((preAgree) => ({ ...preAgree, [name]: checked }));
    // 만약 termsAgree가 checked 되었다면(true라면) ...preAgree로 이전 agree들을 복사하고
    // termsAgree: true로 업데이트한 새로운 객체를 생성함

    const allChecked = Object.values({ ...agree, [name]: checked }).every(
      (value) => value === true,
    );
    // Object.values로 이전의 agree 객체에서 클릭한 요소(name)에 checked를 업데이트하고
    // value만 뽑아 배열로 바꿈
    // ex: [true, false, true, true, false]
    // 다시 업데이트 하는 이유는 agree의 값이 바로 업데이트 되지 않기 때문임
    // 바로 업데이트 안 되는 이유 : 상태 업데이트 함수(setAgree)가 호출되면
    // 업데이트를 스케줄링하고 나중에 컴포넌트 렌더링이 발생하면 그때 값이 업데이트 되기 때문임

    // 그 다음 배열 메소드인 every를 사용해 배열의 모든 값이 true인지 확인 후
    // setAllgree를 호출해 allAgree 상태를 업데이트 함

    setAllAgree(allChecked);
  };

  const handleAllAgreementCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    // e.target에서 e.target.checked을 구조분해 할당으로 가져옴

    const newAgreements = Object.keys(agree).reduce((newAgree, agreeKey) => {
      // Object.keys로 agree 객체에서 key만 뽑아 배열로 만듦
      // ex: [termsAgree, personalInfoAgree, optionalPersonalInfoAgree, salesInfoAgree, ageAgree]
      newAgree[agreeKey] = checked;
      // reduce 함수를 사용해 agree를 순회하면서 요소 하나하나를 newAgree(초기값이 빈 배열) 속에
      // 새로운 키(agreeKey)로 추가하고 value로 변수 checked의 값을 할당함(모두 동의 버튼이 눌렸으니까 checked는 true)
      // ex: newAgree[termsAgree] = true ->
      // newAgree = {termsAgree: true,} -> newAgree[ageAgree] = true -> newAgree = {termsAgree: true, ageAgree: true}
      // 즉, 순회하면서 변수 checked의 값인 true를 각 키의 값으로 할당함
      // 그럼 모든 약관 동의 요소의 checked가 true로 바뀜
      return newAgree;
      // 각 키에 대한 value 값이 true인 새로운 객체를 리턴함
    }, {} as agreeProps);
    setAgree(newAgreements);
    // agree 상태를 업데이트
    setAllAgree(checked);
    // allAgree 상태를 업데이트
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
