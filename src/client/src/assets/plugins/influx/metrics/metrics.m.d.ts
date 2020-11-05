import { MetricQuery } from "common";
export declare class InfluxQuery implements MetricQuery {
    measurement: string;
    policy: string;
    refId: string;
    tags: Tag[];
    fields: Field[];
    limit: number;
    slimit: number;
    order: OrderByTime;
    alias: string;
    groupBy: GroupByObject[];
    hidden: boolean;
}
export declare class Field {
    key: string;
    functions: FuncObject[];
}
export declare class FuncObject {
    name: string;
    param?: any;
}
export declare enum AggrFunc {
    Count = "count",
    Distinct = "distinct",
    Integral = "integral",
    Mean = "mean",
    Median = "median",
    Mode = "mode",
    Sum = "sum",
    Bottom = "bottom",
    First = "first",
    Last = "last",
    Max = "max",
    Min = "min",
    Percentile = "percentile",
    Top = "top",
    Derivative = "derivative",
    Spread = "spread",
    NonNegativeDerivative = "non_negative_derivative",
    Difference = "difference",
    NonNegativeDifference = "non_negative_difference",
    MovingAverage = "moving_average",
    CumulativeSum = "cumulative_sum",
    Stddev = "stddev",
    Elapsed = "elapsed",
    HoltWinters = "holt_winters",
    HoltWintersWithFit = "holt_winters_with_fit",
    Math = "math",
    Alias = "alias"
}
export declare enum AggrFuncGroup {
    Aggregations = 0,
    Selectors = 1,
    Transformations = 2,
    Predictors = 3,
    Math = 4,
    Alias = 5
}
export declare class AggrFuncHelper {
    static getGroup(f: AggrFunc | string): AggrFuncGroup;
}
export declare class GroupByObject {
    type: any;
    params: any[];
    constructor(type: any, params?: any[]);
}
export declare enum GroupByOption {
    Time = 0,
    Fill = 1,
    Tag = 2
}
export declare enum GroupByTimeOptions {
    Dynamic = "$__interval",
    S1 = "1s",
    S10 = "10s",
    M1 = "1m",
    M5 = "5m",
    M10 = "10m",
    M15 = "15m",
    H1 = "1h"
}
export declare enum GroupByFillOptions {
    None = "none",
    Null = "null",
    Zero = "0",
    Prev = "previous",
    Linear = "linear"
}
export declare enum OrderByTime {
    Asc = "asc",
    Desc = "desc"
}
export declare class MetricVars {
    static readonly TIME_FILTER = "$timeFilter";
    static readonly TIME_INTERVAL = "$__interval";
}
export declare class Tag {
    key: string;
    value: string;
    operator: TagOperator;
    condition: TagCondition;
}
export declare enum TagOperator {
    Eq = "=",
    Neq = "<>",
    Less = "<",
    Greater = ">",
    RegExEq = "=~",
    RegExNeq = "!~"
}
export declare enum TagCondition {
    And = "AND",
    Or = "OR"
}
//# sourceMappingURL=metrics.m.d.ts.map