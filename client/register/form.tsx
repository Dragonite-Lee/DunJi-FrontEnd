import FormItem from 'client/register/form-item';

function PolicyForm() {
  return (
    <section className="w-main_width min-w-20 flex items-center flex-col my-40 mx-auto font-sans">
      <h1 className="w-full border-b border-yellow pb-4 text-3xl font-bold">
        회원정보 입력
      </h1>
      <h2 className="text-lg py-8 mr-auto font-bold">
        둥지 서비스 이용을 위해 아래 정보를 입력해 주세요.
      </h2>

      <form className="flex flex-col w-full">
        <FormItem label="아이디" placeholder="이메일 주소 입력" type="email" />
        <FormItem
          label="이용자 이름"
          placeholder="한글 또는 영문"
          type="text"
        />
        <FormItem
          label="비밀번호"
          placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
          type="password"
        />
        <FormItem
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          type="password"
        />

        <button type="submit" className="bg-yellow h-16 font-sans text-2xl">
          확인
        </button>
      </form>
    </section>
  );
}

export default PolicyForm;
