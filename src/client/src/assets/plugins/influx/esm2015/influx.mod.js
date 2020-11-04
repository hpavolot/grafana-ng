import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfluxMetricsBuilder } from './metrics/builder';
import { InfluxMetricsDesignerComponent } from './metrics/designer/designer';
import { QueryEditorComponent } from './metrics/designer/query/query';
import { MeasurementEditorComponent } from './metrics/designer/query/measurement/measurement';
import { FieldsEditorComponent } from './metrics/designer/query/fields/fields';
import { FieldEditorComponent } from './metrics/designer/query/fields/field';
import { FieldFunctionEditorComponent } from './metrics/designer/query/fields/func/editor/func-editor';
import { FieldFunctionPickerComponent } from './metrics/designer/query/fields/func/picker/func-picker';
import { GroupByEditorComponent } from './metrics/designer/query/group-by/group-by';
import { GroupByTagLabelComponent } from './metrics/designer/query/group-by/tag-label.c';
import * as i0 from "@angular/core";
export class InfluxModule {
}
InfluxModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfluxModule });
InfluxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfluxModule_Factory(t) { return new (t || InfluxModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            EdCommonModule,
            EdUilibModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfluxModule, { declarations: [InfluxSettingsEditorComponent,
        InfluxMetricsBuilder,
        InfluxMetricsDesignerComponent,
        QueryEditorComponent,
        MeasurementEditorComponent,
        FieldsEditorComponent,
        FieldEditorComponent,
        FieldFunctionEditorComponent,
        FieldFunctionPickerComponent,
        GroupByEditorComponent,
        GroupByTagLabelComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EdCommonModule,
        EdUilibModule], exports: [InfluxSettingsEditorComponent,
        InfluxMetricsBuilder,
        InfluxMetricsDesignerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfluxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    InfluxSettingsEditorComponent,
                    InfluxMetricsBuilder,
                    InfluxMetricsDesignerComponent,
                    QueryEditorComponent,
                    MeasurementEditorComponent,
                    FieldsEditorComponent,
                    FieldEditorComponent,
                    FieldFunctionEditorComponent,
                    FieldFunctionPickerComponent,
                    GroupByEditorComponent,
                    GroupByTagLabelComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EdCommonModule,
                    EdUilibModule
                ],
                exports: [
                    InfluxSettingsEditorComponent,
                    InfluxMetricsBuilder,
                    InfluxMetricsDesignerComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbHV4Lm1vZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvaW5mbHV4Lm1vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQWdDekYsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFkZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGNBQWM7WUFDZCxhQUFhO1NBQ2Q7d0ZBT1UsWUFBWSxtQkE1QnJCLDZCQUE2QjtRQUM3QixvQkFBb0I7UUFFcEIsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBRTVCLHNCQUFzQjtRQUN0Qix3QkFBd0IsYUFHeEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsY0FBYztRQUNkLGFBQWEsYUFHYiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDhCQUE4QjtrREFHckIsWUFBWTtjQTlCeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiw2QkFBNkI7b0JBQzdCLG9CQUFvQjtvQkFFcEIsOEJBQThCO29CQUM5QixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLDRCQUE0QjtvQkFDNUIsNEJBQTRCO29CQUU1QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLGNBQWM7b0JBQ2QsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsNkJBQTZCO29CQUM3QixvQkFBb0I7b0JBQ3BCLDhCQUE4QjtpQkFDL0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZsdXhTZXR0aW5nc0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MnO1xuXG5cbmltcG9ydCB7IEVkQ29tbW9uTW9kdWxlIH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEVkVWlsaWJNb2R1bGUgfSBmcm9tICd1aWxpYic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmZsdXhNZXRyaWNzQnVpbGRlciB9IGZyb20gJy4vbWV0cmljcy9idWlsZGVyJztcbmltcG9ydCB7IEluZmx1eE1ldHJpY3NEZXNpZ25lckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9kZXNpZ25lcic7XG5pbXBvcnQgeyBRdWVyeUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9xdWVyeSc7XG5pbXBvcnQgeyBNZWFzdXJlbWVudEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9tZWFzdXJlbWVudC9tZWFzdXJlbWVudCc7XG5pbXBvcnQgeyBGaWVsZHNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZmllbGRzL2ZpZWxkcyc7XG5pbXBvcnQgeyBGaWVsZEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9maWVsZHMvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRGdW5jdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9maWVsZHMvZnVuYy9lZGl0b3IvZnVuYy1lZGl0b3InO1xuaW1wb3J0IHsgRmllbGRGdW5jdGlvblBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9maWVsZHMvZnVuYy9waWNrZXIvZnVuYy1waWNrZXInO1xuaW1wb3J0IHsgR3JvdXBCeUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy9kZXNpZ25lci9xdWVyeS9ncm91cC1ieS9ncm91cC1ieSc7XG5pbXBvcnQgeyBHcm91cEJ5VGFnTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MvZGVzaWduZXIvcXVlcnkvZ3JvdXAtYnkvdGFnLWxhYmVsLmMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBJbmZsdXhTZXR0aW5nc0VkaXRvckNvbXBvbmVudCxcbiAgICBJbmZsdXhNZXRyaWNzQnVpbGRlcixcblxuICAgIEluZmx1eE1ldHJpY3NEZXNpZ25lckNvbXBvbmVudCxcbiAgICBRdWVyeUVkaXRvckNvbXBvbmVudCxcbiAgICBNZWFzdXJlbWVudEVkaXRvckNvbXBvbmVudCxcbiAgICBGaWVsZHNFZGl0b3JDb21wb25lbnQsXG4gICAgRmllbGRFZGl0b3JDb21wb25lbnQsXG4gICAgRmllbGRGdW5jdGlvbkVkaXRvckNvbXBvbmVudCxcbiAgICBGaWVsZEZ1bmN0aW9uUGlja2VyQ29tcG9uZW50LFxuXG4gICAgR3JvdXBCeUVkaXRvckNvbXBvbmVudCxcbiAgICBHcm91cEJ5VGFnTGFiZWxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgRWRDb21tb25Nb2R1bGUsXG4gICAgRWRVaWxpYk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW5mbHV4U2V0dGluZ3NFZGl0b3JDb21wb25lbnQsXG4gICAgSW5mbHV4TWV0cmljc0J1aWxkZXIsXG4gICAgSW5mbHV4TWV0cmljc0Rlc2lnbmVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5mbHV4TW9kdWxlIHsgfVxuIl19