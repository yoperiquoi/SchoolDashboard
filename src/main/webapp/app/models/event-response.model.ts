import { DateTimeResponseModel } from './dateTime-response.model';

export interface EventResponseModel {
  summary: string;
  location: string;
  start: DateTimeResponseModel;
  end: DateTimeResponseModel;
}
