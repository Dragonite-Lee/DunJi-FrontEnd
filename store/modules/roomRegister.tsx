import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Image = [
    {
        main: string
    },
    {
        room1: string[]
    },
    {
        room2: string[]
    }
]

type initialStateTypes = {
    COMPONENT_HANDLER: number;
    POSTCODE_OPEN: boolean;
    ADDRESS_OPEN: boolean;
    longitude: null | number;
    latitude: null | number;
    address: string;
    sido: string;
    sigungu: string;
    dong: string;
    ri: string;
    jibun: string;
    detailAddress: string;
    DETAIL_COMPONENT_OPEN: boolean;
    roomType: string;
    dealType: string;
    priceUnit: string;
    deposit: number | string;
    price: number | string;
    manage: 0 | 1;
    manageCost: number | string;
    manageSelect: Array<number>;
    wholeFloor: number | string;
    floor: number | string;
    struct: string;
    elevator: 0 | 1;
    roomSize: number | string;
    availFrom: string;
    availTo: string;
    availConsul: 0;
    optionAll: number;
    option: Array<number>;
    car: 0 | 1 | 2;
    pet: 0 | 1 | 2;
    women: 0 | 1 | 2;
    loan: 0 | 1 | 2;
    title: string;
    explain: string;
    mainImage: string[],
    mainImageUrl: string[],
    room1Image: string[],
    room1ImageUrl: string[],
    room2Image: string[],
    room2ImageUrl: string[],
    postRoomSuccess: any;
    postRoomFailure: any;
    registrant: string;
};

const initialState: initialStateTypes = {
    longitude: null,
    latitude: null,
    COMPONENT_HANDLER: 0,
    POSTCODE_OPEN: false,
    ADDRESS_OPEN: true,
    address: "",
    sido: "",
    sigungu: "",
    dong: "",
    ri: "",
    jibun: "",
    detailAddress: "",
    DETAIL_COMPONENT_OPEN: false,
    roomType: "",
    dealType: "",
    priceUnit: "",
    deposit: "",
    price: "",
    manage: 1,
    manageCost: "",
    manageSelect: [0, 0, 0, 0, 0],
    wholeFloor: "전체층",
    floor: "현재층",
    struct: "구조",
    elevator: 0,
    roomSize: "",
    availFrom: "",
    availTo: "",
    availConsul: 0,
    optionAll: 1,
    option: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    car: 2,
    pet: 2,
    women: 2,
    loan: 2,
    title: "",
    explain: "",
    mainImage: [],
    mainImageUrl: [],
    room1Image: [],
    room1ImageUrl: [],
    room2Image: [],
    room2ImageUrl: [],
    postRoomSuccess: null,
    postRoomFailure: null,
    registrant: "",
};

const roomRegister = createSlice({
    name: "roomRegister",
    initialState,
    reducers: {
        componentHandle: (state, action) => {
            state.COMPONENT_HANDLER = action.payload;
        },
        dispatchRoomType: (state, action) => {
            state.roomType = action.payload;
        },
        dispatchPostCodeOpen: (state, action) => {
            state.POSTCODE_OPEN = action.payload;
        }, // postcode 컴포넌트 열고 닫기
        dispatchAddressOpen: (state, action) => {
            state.ADDRESS_OPEN = action.payload;
        },
        dispatchMainAddress: (state, action) => {
            state.address = action.payload;
        },
        dispatchLongitude: (state, action) => {
            state.longitude = action.payload;
        },
        dispatchLatitude: (state, action) => {
            state.latitude = action.payload;
        },
        dispatchSido: (state, action) => {
            state.sido = action.payload;
        },
        dispatchSigungu: (state, action) => {
            state.sigungu = action.payload;
        },
        dispatchDong: (state, action) => {
            state.dong = action.payload;
        },
        dispatchRi: (state, action) => {
            state.ri = action.payload;
        },
        dispatchJibun: (state, action) => {
            state.jibun = action.payload;
        },
        dispatchDetailAddress: (state, action) => {
            state.detailAddress = action.payload;
        },
        detailComponentHandle: (state, action) => {
            state.DETAIL_COMPONENT_OPEN = action.payload;
        },
        dispatchTransactionType: (state, action) => {
            state.dealType = action.payload;
        },
        dispatchPriceUnit: (state, action) => {
            state.priceUnit = action.payload;
        },
        dispatchDeposit: (state, action) => {
            state.deposit = action.payload;
        },
        dispatchPrice: (state, action) => {
            state.price = action.payload;
        },
        dispatchManage: (state, action) => {
            state.manage = action.payload;
        },
        dispatchManageCost: (state, action) => {
            state.manageCost = action.payload;
        },
        dispatchManageSelect: (state, action) => {
            state.manageSelect = action.payload;
        },
        dispatchWholeFloor: (state, action) => {
            state.wholeFloor = action.payload;
        },
        dispatchCurrentFloor: (state, action) => {
            state.floor = action.payload;
        },
        dispatchStruct: (state, action) => {
            state.struct = action.payload;
        },
        dispatchElevator: (state, action) => {
            state.elevator = action.payload;
        },
        dispatchRoomSize: (state, action) => {
            state.roomSize = action.payload;
        },
        dispatchFrom: (state, action) => {
            state.availFrom = action.payload;
        },
        dispatchTo: (state, action) => {
            state.availTo = action.payload;
        },
        dispatchNegotiable: (state, action) => {
            state.availConsul = action.payload;
        },
        dispatchOption: (state, action) => {
            state.optionAll = action.payload;
        },
        dispatchOptionSelect: (state, action) => {
            state.option = action.payload;
        },
        dispatchCar: (state, action) => {
            state.car = action.payload;
        },
        dispatchPet: (state, action) => {
            state.pet = action.payload;
        },
        dispatchWomen: (state, action) => {
            state.women = action.payload;
        },
        dispatchLoan: (state, action) => {
            state.loan = action.payload;
        },
        dispatchTitle: (state, action) => {
            state.title = action.payload;
        },
        dispatchExplain: (state, action) => {
            state.explain = action.payload;
        },
        dispatchMainImage: (state, action) => {
            state.mainImage = action.payload;
        },
        dispatchMainImageUrl: (state, action) => {
            state.mainImageUrl = action.payload;
        },
        dispatchRoom1Image: (state, action) => {
            state.room1Image = action.payload;
        },
        dispatchRoom1ImageUrl: (state, action) => {
            state.room1ImageUrl = action.payload;
        },
        dispatchRoom2Image: (state, action) => {
            state.room2Image = action.payload;
        },
        dispatchRoom2ImageUrl: (state, action) => {
            state.room2ImageUrl = action.payload;
        },
        postRoom: (state, action) => {}, // state,action이 인자로 선언되어 있어야 postRoom을 처리하는 postRoomSaga에서 action.payload(즉 여기선 방 등록 정보인 formData)를 자동으로 인자로 받음
        postRoomSuccess: (state, action) => {
            state.postRoomSuccess = action.payload;
            state.postRoomFailure = null;
        },
        postRoomFailure: (state, action) => {
            state.postRoomFailure = action.payload;
            state.postRoomSuccess = null;
        },
        dispatchRegistrant: (state, action) => {
            state.registrant = action.payload;
        },
    },
});

export default roomRegister.reducer;

export const {
    componentHandle,
    dispatchRoomType,
    dispatchPostCodeOpen,
    dispatchAddressOpen,
    dispatchMainAddress,
    dispatchLongitude,
    dispatchLatitude,
    dispatchSido,
    dispatchSigungu,
    dispatchDong,
    dispatchRi,
    dispatchJibun,
    dispatchDetailAddress,
    detailComponentHandle,
    dispatchTransactionType,
    dispatchPriceUnit,
    dispatchDeposit,
    dispatchPrice,
    dispatchManage,
    dispatchManageCost,
    dispatchManageSelect,
    dispatchWholeFloor,
    dispatchCurrentFloor,
    dispatchStruct,
    dispatchElevator,
    dispatchRoomSize,
    dispatchFrom,
    dispatchTo,
    dispatchOption,
    dispatchOptionSelect,
    dispatchNegotiable,
    dispatchCar,
    dispatchPet,
    dispatchWomen,
    dispatchLoan,
    dispatchTitle,
    dispatchExplain,
    dispatchMainImage,
    dispatchMainImageUrl,
    dispatchRoom1Image,
    dispatchRoom1ImageUrl,
    dispatchRoom2Image,
    dispatchRoom2ImageUrl,
    postRoom,
    dispatchRegistrant,
} = roomRegister.actions;
