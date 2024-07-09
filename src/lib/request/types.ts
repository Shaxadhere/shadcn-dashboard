export interface GetParams {
  url: string;
  query?: any;
  toastError?: boolean;
  toastMessage?: boolean;
}

export interface PostParams {
  url: string;
  body: any;
  toastError?: boolean;
  toastMessage?: boolean;
  contentType?: string;
}

export interface PutParams {
  url: string;
  body: any;
  toastError?: boolean;
  toastMessage?: boolean;
  contentType?: string;
}

export interface DeleteParams {
  url: string;
  toastError?: boolean;
  toastMessage?: boolean;
}

export interface PatchParams {
  url: string;
  body: any;
  toastError?: boolean;
  toastMessage?: boolean;
  contentType?: string;
}
