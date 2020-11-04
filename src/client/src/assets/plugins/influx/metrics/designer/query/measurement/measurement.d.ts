import { DataSourceService, Panel } from 'common';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as i0 from "@angular/core";
export declare class MeasurementEditorComponent extends BaseQueryComponent {
    dsService: DataSourceService;
    readonly DEFAULT_POLICY = "default";
    get retentionPolicies$(): import("rxjs").Observable<any[]>;
    get measurements$(): import("rxjs").Observable<any>;
    tagOperators$(tag: Tag): import("rxjs").Observable<TagOperator[]>;
    get tagKeys$(): import("rxjs").Observable<any[]>;
    tagValues$(tag: Tag): import("rxjs").Observable<any[]>;
    get conditions$(): import("rxjs").Observable<TagCondition[]>;
    constructor(panel: Panel, dsService: DataSourceService);
    ngOnInit(): void;
    isRegex(expr: any): boolean;
    resetTags(): void;
    onTagKeyPick(t: Tag, k: string): void;
    onTagValuePick(t: Tag, v: string): void;
    static ɵfac: i0.ɵɵFactoryDef<MeasurementEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MeasurementEditorComponent, "measurement-editor", never, {}, {}, never, never>;
}
//# sourceMappingURL=measurement.d.ts.map