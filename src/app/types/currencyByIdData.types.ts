import { marketDataType } from "./marketData.types";

export interface currencyByIdDataType {
    additional_notices: Array<any>,
    asset_platform_id: null;
    block_time_in_minutes: number;
    categories: string[];
    coingecko_rank: number;
    coingecko_score: number;
    community_data: object;
    community_score: number;
    country_origin: string;
    description: Array<any>;
    detail_platforms: object;
    developer_data: Array<any>;
    developer_score: number;
    genesis_date: string;
    hashing_algorithm: string;
    id: string;
    image: string[];
    last_updated: string;
    links: object;
    liquidity_score: number;
    localization: object;
    market_cap_rank: number;
    market_data: marketDataType;
    name: string;
    platforms: object;
    public_interest_score: number;
    public_interest_stats: object;
    public_notice: null;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    status_updates: Array<any>
    symbol: string;
    tickers: Array<object>;

}