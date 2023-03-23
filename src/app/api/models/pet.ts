/* tslint:disable */
import { Category } from './category';
import { Tag } from './tag';
export interface Pet {
  category?: Category;
  id?: number;
  name: string;
  photoUrls: Array<string>;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
  tags?: Array<Tag>;
}
