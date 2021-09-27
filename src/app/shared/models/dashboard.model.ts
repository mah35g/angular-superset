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
  charts?: any;
  datasets?: any;
}

export type DashboardRequiredProps = Pick<DashboardModel, "id" | "dashboard_title">;

export interface DashboardCharts {
  slice_name: string;
  slice_url: string;
  description: string;
  form_data: any;
}

export interface DashboardDatasets {
  id: number;
  name: string;
  datasource_name: string;
  type: string;
  edit_url: string;
  table_name: string;
  columns: any;
  database: any;
}