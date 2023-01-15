export type ReviewRegisterState = {
  COMPONENT_HANDLER: number;
  POSTCODE_OPEN: boolean;
  ADDRESS_OPEN: boolean;
  registrant: string;
  content: string;
  address: string;
  detailAddress: string;
  total: string[];
  totalNum: number;
  clean: 0 | 1 | 2 | 3;
  sound: 0 | 1 | 2 | 3;
  accessible: 0 | 1 | 2 | 3;
  landlord: 0 | 1 | 2 | 3;
  facility: 0 | 1 | 2 | 3;
  periodFrom: string;
  periodTo: string;
  Reviewfile: string[];
  ReviewfileUrl: string[];
};