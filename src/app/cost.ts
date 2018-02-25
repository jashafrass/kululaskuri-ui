import { CostItem } from './cost.item';

export class Cost {
	CostsId: string;
	Timeplaced: number;
	Shop: string;
	Items: CostItem[];
	Datetime: string;
	TotalAmount: number;
}