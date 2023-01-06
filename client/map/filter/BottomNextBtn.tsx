import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { mapApi } from '_api/room';
import { dispatchfilterDataTypes } from 'store/modules/filter';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';

import type { RootState } from 'store/modules';

function BottomNextBtn() {
  const dispatch = useDispatch();
  const mapFilter = useSelector((state: RootState) => state.mapFilter);

  const isEmpty = useCallback(function (value: any) {
    if (
      value == '' ||
      value == null ||
      value == undefined ||
      (value != null && typeof value == 'object' && !Object.keys(value).length)
    ) {
      return true;
    } else {
      return false;
    }
  }, []);

  const checkHandler = useCallback(async () => {
    const formData = new FormData();

    for (const item in mapFilter) {
      if (!isEmpty(mapFilter[item])) formData.append(item, mapFilter[item]); //formdata에 값 입력
    }

    // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
    const delete_arr = [
      'oneRoom',
      'twoRoom',
      'threeRoom',
      'floorFive',
      'floorsixup',
      'floortenup',
      'basement',
      'rooftop',
      'openType',
      'separateType',
      'twoFloorType',
      'car',
      'elevator',
      'pet',
      'fullOption',
      'women',
      'loan',
      'priceSort',
      'recommendSort',
      'priceFrom',
      'priceTo',
      'depositFrom',
      'depositTo',
      'manageFrom',
      'manageTo',
      'sizeFrom',
      'sizeTo',
    ];
    for (let i = 0; i < delete_arr.length; i++) formData.delete(delete_arr[i]);

    //각각 true면 1 false면 0
    if (mapFilter.oneRoom == false) {
      formData.append('oneRoom', '0');
    } else if (mapFilter.oneRoom == true) {
      formData.append('oneRoom', '1');
    }
    if (mapFilter.twoRoom == false) {
      formData.append('twoRoom', '0');
    } else if (mapFilter.twoRoom == true) {
      formData.append('twoRoom', '1');
    }
    if (mapFilter.threeRoom == false) {
      formData.append('threeRoom', '0');
    } else if (mapFilter.threeRoom == true) {
      formData.append('threeRoom', '1');
    }

    if (mapFilter.floorFive == false) {
      formData.append('floorFive', '0');
    } else if (mapFilter.floorFive == true) {
      formData.append('floorFive', '1');
    }
    if (mapFilter.floorsixup == false) {
      formData.append('floorsixup', '0');
    } else if (mapFilter.floorsixup == true) {
      formData.append('floorsixup', '1');
    }
    if (mapFilter.floortenup == false) {
      formData.append('floortenup', '0');
    } else if (mapFilter.floortenup == true) {
      formData.append('floortenup', '1');
    }
    if (mapFilter.basement == false) {
      formData.append('basement', '0');
    } else if (mapFilter.basement == true) {
      formData.append('basement', '1');
    }
    if (mapFilter.rooftop == false) {
      formData.append('rooftop', '0');
    } else if (mapFilter.rooftop == true) {
      formData.append('rooftop', '1');
    }

    if (mapFilter.openType == false) {
      formData.append('openType', '0');
    } else if (mapFilter.openType == true) {
      formData.append('openType', '1');
    }
    if (mapFilter.separateType == false) {
      formData.append('separateType', '0');
    } else if (mapFilter.separateType == true) {
      formData.append('separateType', '1');
    }
    if (mapFilter.twoFloorType == false) {
      formData.append('twoFloorType', '0');
    } else if (mapFilter.twoFloorType == true) {
      formData.append('twoFloorType', '1');
    }

    if (mapFilter.car == false) {
      formData.append('car', '0');
    } else if (mapFilter.car == true) {
      formData.append('car', '1');
    }
    if (mapFilter.elevator == false) {
      formData.append('elevator', '0');
    } else if (mapFilter.elevator == true) {
      formData.append('elevator', '1');
    }
    if (mapFilter.pet == false) {
      formData.append('pet', '0');
    } else if (mapFilter.pet == true) {
      formData.append('pet', '1');
    }
    if (mapFilter.fullOption == false) {
      formData.append('fullOption', '0');
    } else if (mapFilter.fullOption == true) {
      formData.append('fullOption', '1');
    }
    if (mapFilter.women == false) {
      formData.append('women', '0');
    } else if (mapFilter.women == true) {
      formData.append('women', '1');
    }
    if (mapFilter.loan == false) {
      formData.append('loan', '0');
    } else if (mapFilter.loan == true) {
      formData.append('loan', '1');
    }

    if (mapFilter.priceSort == false) {
      formData.append('priceSort', '0');
    } else if (mapFilter.priceSort == true) {
      formData.append('priceSort', '1');
    }
    if (mapFilter.recommendSort == false) {
      formData.append('recommendSort', '0');
    } else if (mapFilter.recommendSort == true) {
      formData.append('recommendSort', '1');
    }

    const price_arr = [
      'priceFrom',
      'priceTo',
      'depositFrom',
      'depositTo',
      'manageFrom',
      'manageTo',
      'sizeFrom',
      'sizeTo',
    ];

    const price_value_arr = [
      mapFilter.priceFrom,
      mapFilter.priceTo,
      mapFilter.depositFrom,
      mapFilter.depositTo,
      mapFilter.manageFrom,
      mapFilter.manageTo,
      mapFilter.sizeFrom,
      mapFilter.sizeTo,
    ];

    for (let i = 0; i < price_arr.length; i++) {
      formData.append(price_arr[i], price_value_arr[i]);
    }

    // const all_items_arr = [
    //     { dealType: "거래유형을" },
    //     { oneRoom: "방종류를" },
    //     { twoRoom: "방종류를" },
    //     { threeRoom: "방종류를" },
    //     { priceUnit: "가격단위를" },
    //     { priceFrom: "가격을" },
    //     { priceTo: "가격을" },
    //     { depositFrom: "가격을" },
    //     { depositTo: "가격을" },
    //     { manageFrom: "관리비를" },
    //     { manageTo: "관리비를" },
    //     // { floorfive: "층수를" },
    //     // { floorsixup: "층수를" },
    //     // { floortenup: "층수를" },
    //     // { basement: "층수를" },
    //     // { rooftop: "층수를" },
    //     { openType: "방구조를" },
    //     { separateType: "방구조를" },
    //     { twoFloorType: "방구조를" },
    //     { sizeFrom: "방크기를" },
    //     { sizeTo: "방크기를" },
    //     { car: "추가필터를" },
    //     { elevator: "추가필터를" },
    //     { pet: "추가필터를" },
    //     { fullOption: "추가필터를" },
    //     { women: "추가필터를" },
    //     { loan: "추가필터를" },
    //     { priceSort: "나열순서를" },
    //     { recommendSort: "나열순서를" },
    // ];

    try {
      // for (let item of all_items_arr) {
      //     const key = Object.keys(item)[0];
      //     const message = Object.values(item)[0];
      //     if (!formData.has(key)) {
      //         throw message;
      //     }
      // }
      for (const i of formData.entries()) {
        console.log(i);
      }

      await mapApi.getRoom(formData).then((res) => {
        console.log(res);
        dispatch(dispatchfilterDataTypes(res));
      });
    } catch (e) {
      alert(e + ' 입력해 주세요');
    }
  }, [dispatch, isEmpty, mapFilter]);

  return (
    <BottomNextBtnLayout content="필터 적용" onClick={checkHandler} />
  );
}

export default BottomNextBtn;
