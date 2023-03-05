import Card from 'client/myPage/Card';

interface ResultContainerProps {
  result: any[];
}
function ResultContainer({ result }: ResultContainerProps) {
  if (result.length === 0) {
    return (
      <div className="mx-1 my-7 text-[14px] text-[#FF9240]">
        매물번호를 조회하면 더 쉽게 매물 정보를 얻을 수 있습니다!
      </div>
    );
  }
  return (
    <div className="mt-11">
      <h3 className="text-[17px] mb-4">조회 결과</h3>
      <div className="flex flex-col gap-4">
        {' '}
        {result.map((data) => (
          <Card key={data.roomId} {...data} />
        ))}
      </div>
    </div>
  );
}

export default ResultContainer;
