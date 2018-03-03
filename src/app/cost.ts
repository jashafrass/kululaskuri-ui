import { CostItem } from './cost.item';

export class Cost {
	public CostsId: string;
	public Timeplaced: number;
	public Shop: string;
	public Items: CostItem[];
	public Datetime: string;
	public TotalAmount: number;
}