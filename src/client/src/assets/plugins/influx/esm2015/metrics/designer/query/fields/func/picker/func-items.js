import { AggrFunc, AggrFuncGroup } from '../../../../../metrics.m';
const timeSuggestions = ['1s', '10s', '1m', '5m', '10m', '15m', '1h'];
export const menuItems = [
    { label: AggrFuncGroup[0], items: [
            { label: AggrFunc.Count },
            { label: AggrFunc.Distinct },
            { label: AggrFunc.Integral },
            { label: AggrFunc.Mean },
            { label: AggrFunc.Median },
            { label: AggrFunc.Mode },
            { label: AggrFunc.Sum },
        ] },
    { label: AggrFuncGroup[1], items: [
            { label: AggrFunc.Bottom, param: { value: '3' } },
            { label: AggrFunc.First },
            { label: AggrFunc.Last },
            { label: AggrFunc.Max },
            { label: AggrFunc.Min },
            { label: AggrFunc.Percentile, param: { value: '95' } },
            { label: AggrFunc.Top, param: { value: '3' } },
        ] },
    { label: AggrFuncGroup[2], items: [
            { label: AggrFunc.Derivative,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
            { label: AggrFunc.Spread },
            { label: AggrFunc.NonNegativeDerivative,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
            { label: AggrFunc.Difference },
            { label: AggrFunc.NonNegativeDifference },
            { label: AggrFunc.MovingAverage, param: { value: '10', suggestions: ['5', '10', '20', '30', '40'] } },
            { label: AggrFunc.CumulativeSum },
            { label: AggrFunc.Stddev },
            { label: AggrFunc.Elapsed,
                param: { value: timeSuggestions[1], suggestions: [...timeSuggestions] } },
        ] },
    //  { label: AggrFuncGroup[ 3 ], items: [ 
    //     { label: AggrFunc.HoltWinters },
    //     { label: AggrFunc.HoltWintersWithFit }
    //     ] },
    { label: AggrFuncGroup[4], items: [
            { label: AggrFunc.Math, param: { value: ' / 100' } }
        ] },
    { label: AggrFuncGroup[5], items: [
            { label: AggrFunc.Alias, param: { value: 'alias' } }
        ] },
    { label: 'Field', items: [{ label: 'field' }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuYy1pdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2VzL2luZmx1eC9zcmMvbWV0cmljcy9kZXNpZ25lci9xdWVyeS9maWVsZHMvZnVuYy9waWNrZXIvZnVuYy1pdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRW5FLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFckUsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFVO0lBQzlCLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBRSxDQUFDLENBQUUsRUFBRSxLQUFLLEVBQUU7WUFDakMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN6QixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzVCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRTtZQUN4QixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzFCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRTtTQUN0QixFQUFFO0lBQ04sRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFFLENBQUMsQ0FBRSxFQUFFLEtBQUssRUFBRTtZQUNsQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNqRCxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3pCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUN2QixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFHO1lBQ3ZELEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1NBQzdDLEVBQUU7SUFDTCxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUUsQ0FBQyxDQUFFLEVBQUUsS0FBSyxFQUFFO1lBQ2xDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVO2dCQUMxQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFFLENBQUMsQ0FBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLEVBQUUsRUFBRTtZQUM3RSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFHO1lBQzNCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxxQkFBcUI7Z0JBQ3BDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUUsQ0FBQyxDQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsRUFBRSxFQUFFO1lBQzlFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1lBQ3pDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNyRyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2pDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU87Z0JBQ3ZCLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUUsQ0FBQyxDQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsRUFBRSxFQUFFO1NBQzVFLEVBQUU7SUFDUCwwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1QsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFFLENBQUMsQ0FBRSxFQUFFLEtBQUssRUFBRTtZQUNsQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtTQUNyRCxFQUFHO0lBQ0osRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFFLENBQUMsQ0FBRSxFQUFFLEtBQUssRUFBRTtZQUNsQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtTQUNyRCxFQUFHO0lBQ0osRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Q0FDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JGdW5jLCBBZ2dyRnVuY0dyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbWV0cmljcy5tJztcclxuXHJcbmNvbnN0IHRpbWVTdWdnZXN0aW9ucyA9IFsnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtczogYW55W10gPSBbXHJcbiAgeyBsYWJlbDogQWdnckZ1bmNHcm91cFsgMCBdLCBpdGVtczogWyBcclxuICAgICB7IGxhYmVsOiBBZ2dyRnVuYy5Db3VudCB9LFxyXG4gICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkRpc3RpbmN0IH0sXHJcbiAgICAgeyBsYWJlbDogQWdnckZ1bmMuSW50ZWdyYWwgfSxcclxuICAgICB7IGxhYmVsOiBBZ2dyRnVuYy5NZWFuIH0sXHJcbiAgICAgeyBsYWJlbDogQWdnckZ1bmMuTWVkaWFuIH0sXHJcbiAgICAgeyBsYWJlbDogQWdnckZ1bmMuTW9kZSB9LFxyXG4gICAgIHsgbGFiZWw6IEFnZ3JGdW5jLlN1bSB9LFxyXG4gICAgIF0gfSxcclxuICB7IGxhYmVsOiBBZ2dyRnVuY0dyb3VwWyAxIF0sIGl0ZW1zOiBbIFxyXG4gICAgeyBsYWJlbDogQWdnckZ1bmMuQm90dG9tLCBwYXJhbTogeyB2YWx1ZTogJzMnIH0gfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkZpcnN0IH0sXHJcbiAgICB7IGxhYmVsOiBBZ2dyRnVuYy5MYXN0IH0sXHJcbiAgICB7IGxhYmVsOiBBZ2dyRnVuYy5NYXggfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLk1pbiB9LFxyXG4gICAgeyBsYWJlbDogQWdnckZ1bmMuUGVyY2VudGlsZSwgcGFyYW06IHsgdmFsdWU6ICc5NScgfSAgfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLlRvcCwgcGFyYW06IHsgdmFsdWU6ICczJyB9IH0sXHJcbiAgICBdIH0sXHJcbiAgeyBsYWJlbDogQWdnckZ1bmNHcm91cFsgMiBdLCBpdGVtczogWyBcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkRlcml2YXRpdmUsXHJcbiAgICAgIHBhcmFtOiB7IHZhbHVlOiB0aW1lU3VnZ2VzdGlvbnNbIDEgXSwgc3VnZ2VzdGlvbnM6IFsuLi50aW1lU3VnZ2VzdGlvbnNdIH0gfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLlNwcmVhZCAgfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLk5vbk5lZ2F0aXZlRGVyaXZhdGl2ZSxcclxuICAgICAgIHBhcmFtOiB7IHZhbHVlOiB0aW1lU3VnZ2VzdGlvbnNbIDEgXSwgc3VnZ2VzdGlvbnM6IFsuLi50aW1lU3VnZ2VzdGlvbnNdIH0gfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkRpZmZlcmVuY2UgfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLk5vbk5lZ2F0aXZlRGlmZmVyZW5jZSB9LFxyXG4gICAgeyBsYWJlbDogQWdnckZ1bmMuTW92aW5nQXZlcmFnZSwgcGFyYW06IHsgdmFsdWU6ICcxMCcsIHN1Z2dlc3Rpb25zOiBbJzUnLCAnMTAnLCAnMjAnLCAnMzAnLCAnNDAnXSB9IH0sXHJcbiAgICB7IGxhYmVsOiBBZ2dyRnVuYy5DdW11bGF0aXZlU3VtIH0sXHJcbiAgICB7IGxhYmVsOiBBZ2dyRnVuYy5TdGRkZXYgfSxcclxuICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkVsYXBzZWQsIFxyXG4gICAgICBwYXJhbTogeyB2YWx1ZTogdGltZVN1Z2dlc3Rpb25zWyAxIF0sIHN1Z2dlc3Rpb25zOiBbLi4udGltZVN1Z2dlc3Rpb25zXSB9IH0sXHJcbiAgICBdIH0sXHJcbi8vICB7IGxhYmVsOiBBZ2dyRnVuY0dyb3VwWyAzIF0sIGl0ZW1zOiBbIFxyXG4vLyAgICAgeyBsYWJlbDogQWdnckZ1bmMuSG9sdFdpbnRlcnMgfSxcclxuLy8gICAgIHsgbGFiZWw6IEFnZ3JGdW5jLkhvbHRXaW50ZXJzV2l0aEZpdCB9XHJcbi8vICAgICBdIH0sXHJcbiAgeyBsYWJlbDogQWdnckZ1bmNHcm91cFsgNCBdLCBpdGVtczogW1xyXG4gICAgeyBsYWJlbDogQWdnckZ1bmMuTWF0aCwgcGFyYW06IHsgdmFsdWU6ICcgLyAxMDAnIH0gfVxyXG4gIF0gIH0sXHJcbiAgeyBsYWJlbDogQWdnckZ1bmNHcm91cFsgNSBdLCBpdGVtczogW1xyXG4gICAgeyBsYWJlbDogQWdnckZ1bmMuQWxpYXMsIHBhcmFtOiB7IHZhbHVlOiAnYWxpYXMnIH0gfVxyXG4gIF0gIH0sXHJcbiAgeyBsYWJlbDogJ0ZpZWxkJywgaXRlbXM6IFsgeyBsYWJlbDogJ2ZpZWxkJyB9XSB9XHJcbl07XHJcbiJdfQ==