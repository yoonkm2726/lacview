/**
 * 라크뷰 입주 자금 & 대출 계산기 설정 데이터
 * 이 파일의 숫자만 메모장 등으로 수정하시면 웹페이지에 자동으로 반영됩니다.
 * 금액 단위: 만 원 (예: 60000 = 6억 원)
 */
const APARTMENT_CONFIG = {
  // 설정 파일 버전 (수정 시 브라우저 캐시 및 저장값이 자동 갱신됩니다)
  version: "1789224285853",

  // 사이트 제목 및 부제
  title: "라크뷰 입주 자금 & 대출 계산기",
  subTitle: "매도가와 대출액, 모일 자금을 변경하면 실시간으로 자동 계산됩니다.",

  // 1. 기본 입력값 (첫 화면에 표시될 값)
  defaults: {
    salePrice: 60000,       // 현재 집 예상 매도가 (6억 원)
    existingLoan: 21000,    // 현재 집 기존 대출 잔액 (2억 1,000만 원)
    currentCash: 3000,      // 현재 보유 현금/예적금 (3,000만 원)
    futureSavings: 2000,    // 입주 전 모을 자금 (성과금, 급여 저축 등 2,000만 원)
    newLoan: 30000,         // 신규 디딤돌/주담대 금액 (3억 원)
    loanYears: 30,          // 대출 상환 기간 (년)
    interestRate: 3.3,      // 연 금리 (%)
    savingsList: [
      { id: 1, name: "현재 보유 현금/예적금", amount: 3000, category: "cash" },
      { id: 2, name: "입주 전 급여/성과금 모을 자금", amount: 2000, category: "savings" }
    ]
  },

  // 2. 분양 계약 기본 정보
  contract: {
    apartmentPrice: 70800,   // 분양가 총액 (7억 800만 원)
    apartmentPaidPercent: 10, // 기납부 계약금 비율 (10%)
    extraPrice: 2500,        // 발코니 확장비 총액 (2,500만 원)
    extraPaidPercent: 10     // 발코니 확장비 계약금 기납부 비율 (10%)
  },

  // 3. 입주 시 추가 필요 부대비용 명세 (만 원)
  costs: [
    { name: "취득세 등", note: "신생아 감면 등 가정", amount: 1021 },
    { name: "시스템에어컨", note: "4대 인버터", amount: 620 },
    { name: "법무사 · 등기 비용", note: "소유권 이전등기 등", amount: 130 },
    { name: "이사 비용", note: "포장이사/사다리차", amount: 230 },
    { name: "기타 입주 부대비용", note: "입주청소/줄눈 등", amount: 150 }
  ],

  // 5. 구글 Firebase 실시간 클라우드 DB 연동 설정
  // Firebase 콘솔에서 발급받은 키를 여기에 넣으시면 모든 사람의 화면이 실시간 자동 동기화됩니다!
    // 5. 구글 Firebase 실시간 클라우드 DB 연동 설정
  // 누구든 수정할 때마다 전 세계 모든 접속자 화면이 0.1초 만에 실시간 자동 동기화됩니다!
  firebaseConfig: {
    apiKey: "AIzaSyCtLucVUFBJcSXZqcU2eg2j5v65HUXsj0I",
    authDomain: "lacview-14eaf.firebaseapp.com",
    databaseURL: "https://lacview-14eaf-default-rtdb.firebaseio.com",
    projectId: "lacview-14eaf",
    storageBucket: "lacview-14eaf.firebasestorage.app",
    messagingSenderId: "94070303919",
    appId: "1:94070303919:web:a6aa3e25c3a1c271a8785a"
  },

  // 4. 유의사항 안내 문구
  notices: [
    "대출 상환은 <strong>원리금균등, 원금균등, 체증식(HF디딤돌)</strong> 분할상환 방식으로 정밀 계산됩니다.",
    "은행별 첫 회차 일수 계산, 거치기간 여부, 가산금리 변동 및 원 단위 절사에 따라 실제 청구액과 미세한 차이가 있을 수 있습니다.",
    "취득세(약 1,021만 원)는 지방세법 제11조 및 신생아 출산가구 취득세 감면(최대 500만 원 공제, 2024~2027년 이후 출산 연장 적용) 기준입니다.",
    "기존 주택 처분 조건부 일시적 2주택자도 3년 이내 종전자산 처분 시 신생아 감면 혜택을 동일하게 적용받을 수 있습니다."
  ]
};
