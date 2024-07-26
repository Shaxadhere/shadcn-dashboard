export interface RequestParams {
  successAction?: {
    label: string;
    onClick: () => void;
  };
  errorAction?: {
    label: string;
    onClick: () => void;
  };
  toastError?: boolean;
  toastMessage?: boolean;
  contentType?: string;
  url: string;
}
export interface GetParams extends RequestParams {
  query?: any;
}

export interface PostParams extends RequestParams {
  body: any;
}

export interface PutParams extends RequestParams {
  body: any;
}

export interface DeleteParams extends RequestParams {}

export interface PatchParams extends RequestParams {
  body: any;
}
