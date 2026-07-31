export type Page = 'home' | 'buildingSelection' | 'buildingIntake' | 'privacy';

export type BuildingStatus = 'open' | 'upcoming';

/** 由 cowork-admin 的大樓設定 API 回傳，避免官網與後台各自維護名稱。 */
export type PublicBuilding = {
  slug: string;
  name: string;
  status: BuildingStatus;
  displayOrder: number;
};
