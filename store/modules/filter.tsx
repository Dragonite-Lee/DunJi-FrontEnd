import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateTypes = {
    startLongitude: number;
    startLatitude: number;
    endLongitude: number;
    endLatitude: number;
    dealType: string;
    oneRoom: boolean;
    twoRoom: boolean;
    threeRoom: boolean;
    priceUnit: string;
    priceFrom: number;
    priceTo: number;
    depositFrom: number;
    depositTo: number;
    manageFrom: number;
    manageTo: number;
    floorfive: boolean;
    floorsixup: boolean;
    floortenup: boolean;
    basement: boolean;
	rooftop: boolean;
	openType: boolean;
	separateType: boolean;
	twoFloorType: boolean;
	sizeFrom: number;
	sizeTo: number;
	car: boolean;
	elevator: boolean;
	pet: boolean;
	fullOption: boolean;
	women: boolean;
	loan: boolean;
	priceSort: boolean;
	recommendSort: boolean;
};
//선택안함이 0 default
const initialState: initialStateTypes = {
    startLongitude: 0,
    startLatitude: 0,
    endLongitude: 0,
    endLatitude: 0,
    dealType: "",
    oneRoom: false,
    twoRoom: false,
    threeRoom: false,
    priceUnit: "",
    priceFrom: 0,
    priceTo: 0,
    depositFrom: 0,
    depositTo: 0,
    manageFrom: 0,
    manageTo: 0,
    floorfive: false,
    floorsixup: false,
    floortenup: false,
    basement: false,
	rooftop: false,
	openType: false,
	separateType: false,
	twoFloorType: false,
	sizeFrom: 0,
	sizeTo: 0,
	car: false,
	elevator: false,
	pet: false,
	fullOption: false,
	women: false,
	loan: false,
	priceSort: false,
	recommendSort: false,
};

const mapFilter = createSlice({
    name: "mapFilter",
    initialState,
    reducers: {
        dispatchStartLongitude: (state, action) => {
            state.startLongitude = action.payload;
        },
        dispatchStartLatitude: (state, action) => {
            state.startLatitude = action.payload;
        }, // postcode 컴포넌트 열고 닫기
        dispatchEndLongitude: (state, action) => {
            state.endLongitude = action.payload;
        },
        dispatchEndLatitude: (state, action) => {
            state.endLatitude = action.payload;
        },
        dispatchDealType: (state, action) => {
            state.dealType = action.payload;
        },
        dispatchOneRoom: (state, action) => {
            state.oneRoom = action.payload;
        },
        dispatchTwoRoom: (state, action) => {
            state.twoRoom = action.payload;
        },
        dispatchThreeRoom: (state, action) => {
            state.threeRoom = action.payload;
        },
        dispatchPriceUnit: (state, action) => {
            state.priceUnit = action.payload;
        },
        dispatchPriceFrom: (state, action) => {
            state.priceFrom = action.payload;
        },
        dispatchPriceTo: (state, action) => {
            state.priceTo = action.payload;
        },
        dispatchDepositFrom: (state, action) => {
            state.depositFrom = action.payload;
        },
        dispatchDepositTo: (state, action) => {
            state.depositTo = action.payload;
        },
        dispatchManageFrom: (state, action) => {
            state.manageFrom = action.payload;
        },
        dispatchManageTo: (state, action) => {
            state.manageTo = action.payload;
        },
        dispatchFloorfive: (state, action) => {
            state.floorfive = action.payload;
        },
        dispatchFloorsixup: (state, action) => {
            state.floorsixup = action.payload;
        },
        dispatchFloortenup: (state, action) => {
            state.floortenup = action.payload;
        },
        dispatchBasement: (state, action) => {
            state.basement = action.payload;
        },
        dispatchRooftop: (state, action) => {
            state.rooftop = action.payload;
        },
        dispatchOpenType: (state, action) => {
            state.openType = action.payload;
        },
        dispatchSeparateType: (state, action) => {
            state.separateType = action.payload;
        },
        dispatchTwoFloorType: (state, action) => {
            state.twoFloorType = action.payload;
        },
        dispatchSizeFrom: (state, action) => {
            state.sizeFrom = action.payload;
        },
        dispatchSizeTo: (state, action) => {
            state.sizeTo = action.payload;
        },
        dispatchCar: (state, action) => {
            state.car = action.payload;
        },
        dispatchElevator: (state, action) => {
            state.elevator = action.payload;
        },
        dispatchPet: (state, action) => {
            state.pet = action.payload;
        },
        dispatchFullOption: (state, action) => {
            state.fullOption = action.payload;
        },
        dispatchWomen: (state, action) => {
            state.women = action.payload;
        },
        dispatchLoan: (state, action) => {
            state.loan = action.payload;
        },
        dispatchPriceSort: (state, action) => {
            state.priceSort = action.payload;
        },
        dispatchRecommendSort: (state, action) => {
            state.recommendSort = action.payload;
        },
    },
});

export default mapFilter.reducer;

export const {
    dispatchStartLongitude,
    dispatchStartLatitude,
    dispatchEndLongitude,
    dispatchEndLatitude,
    dispatchDealType,
    dispatchOneRoom,
    dispatchTwoRoom,
    dispatchThreeRoom,
    dispatchPriceUnit,
    dispatchPriceFrom,
    dispatchPriceTo,
    dispatchDepositFrom,
    dispatchDepositTo,
    dispatchManageFrom,
    dispatchManageTo,
    dispatchFloorfive,
    dispatchFloorsixup,
    dispatchFloortenup,
    dispatchBasement,
    dispatchRooftop,
    dispatchOpenType,
    dispatchSeparateType,
    dispatchTwoFloorType,
    dispatchSizeFrom,
    dispatchSizeTo,
    dispatchCar,
    dispatchElevator,
    dispatchPet,
    dispatchFullOption,
    dispatchWomen,
    dispatchLoan,
    dispatchPriceSort,
    dispatchRecommendSort,
} = mapFilter.actions;