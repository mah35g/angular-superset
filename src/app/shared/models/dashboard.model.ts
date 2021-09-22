export interface DashboardModel {
  id: number;
  dashboard_title: string;
  status: string;
  thumbnail_url: string;
  url: string;
  json_metadata: string;
  position_json: string;
  slug: any;
  css: string;
  owners: any;
  roles: any;
}

export type DashboardRequiredProps = Pick<DashboardModel, "id" | "dashboard_title">;
