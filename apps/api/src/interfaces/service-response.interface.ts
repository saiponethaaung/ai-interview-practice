export interface ServiceResponse<T> {
  data?: T;
  message: string;
  error: Error | null;
  status: boolean;
}
