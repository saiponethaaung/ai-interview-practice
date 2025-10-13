import { Request } from 'express';
import { FileResponse } from 'src/modules/file/dto/response/file.response';

export interface FileRequest extends Request {
  fileObj: FileResponse;
}
