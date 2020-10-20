import { PixelHelper } from "./pixel-helper";
export class TrackballDrawerPlugin {
    get id() {
        return TrackballDrawerPlugin.ID;
    }
    afterDatasetsDraw(chart, easing) {
        //console.log( "trackball plugin" )
        return;
        const context = chart.chart.ctx;
        const scaleX = chart.scales['x-axis-0'];
        //const scaleYA = chart.scales[ "A" ];
        const scaleYA = chart.scales["y-axis-0"];
        var pos = this.getMousePos(chart.canvas, chart.trackball);
        console.log(pos);
        const shouldIgnore = (!chart.trackball) ||
            (0 == chart.data.datasets.length) ||
            (pos.x < scaleX.left || pos.x > scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = PixelHelper.alignPixel(chart, pos.x, lw);
        const y1 = PixelHelper.alignPixel(chart, scaleYA.top, lw);
        const y2 = PixelHelper.alignPixel(chart, scaleYA.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
    getMousePos(canvas, evt) {
        if (!evt) {
            return;
        }
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
TrackballDrawerPlugin.ID = "trackball";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tiYWxsLWRyYXdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL2V4dGVuc2lvbnMvdHJhY2tiYWxsLWRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsTUFBTSxPQUFPLHFCQUFxQjtJQUdqQyxJQUFJLEVBQUU7UUFDTCxPQUFPLHFCQUFxQixDQUFDLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDOUIsbUNBQW1DO1FBQ25DLE9BQU87UUFFUCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVoQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhDLHNDQUFzQztRQUN0QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBRTNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFFLENBQUM7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUVuQixNQUFNLFlBQVksR0FDakIsQ0FBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUU7WUFDcEIsQ0FBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1lBQ25DLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBRWpELElBQUksWUFBWSxFQUFFO1lBQ2pCLE9BQU87U0FDUDtRQUVELE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNmLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFFLENBQUE7UUFDcEQsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUUsQ0FBQTtRQUMzRCxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBRSxDQUFBO1FBRTlELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1QsT0FBTztTQUNQO1FBRUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDMUMsT0FBTztZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHO1NBQzFCLENBQUM7SUFDTCxDQUFDOztBQXJEZSx3QkFBRSxHQUFHLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpeGVsSGVscGVyIH0gZnJvbSBcIi4vcGl4ZWwtaGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tiYWxsRHJhd2VyUGx1Z2luIHtcclxuXHRzdGF0aWMgcmVhZG9ubHkgSUQgPSBcInRyYWNrYmFsbFwiO1xyXG5cclxuXHRnZXQgaWQoKXtcclxuXHRcdHJldHVybiBUcmFja2JhbGxEcmF3ZXJQbHVnaW4uSUQ7XHJcblx0fVxyXG5cclxuXHRhZnRlckRhdGFzZXRzRHJhdyhjaGFydCwgZWFzaW5nKSB7XHJcblx0XHQvL2NvbnNvbGUubG9nKCBcInRyYWNrYmFsbCBwbHVnaW5cIiApXHJcblx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGNvbnN0IGNvbnRleHQgPSBjaGFydC5jaGFydC5jdHg7XHJcblxyXG5cdFx0Y29uc3Qgc2NhbGVYID0gY2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddO1xyXG5cdFx0XHJcblx0XHQvL2NvbnN0IHNjYWxlWUEgPSBjaGFydC5zY2FsZXNbIFwiQVwiIF07XHJcblx0XHRjb25zdCBzY2FsZVlBID0gY2hhcnQuc2NhbGVzWyBcInktYXhpcy0wXCIgXTtcclxuXHJcblx0XHR2YXIgcG9zID0gdGhpcy5nZXRNb3VzZVBvcyggY2hhcnQuY2FudmFzLCBjaGFydC50cmFja2JhbGwgKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyggcG9zICk7XHJcblxyXG5cdFx0Y29uc3Qgc2hvdWxkSWdub3JlID0gXHJcblx0XHRcdCggIWNoYXJ0LnRyYWNrYmFsbCApIHx8XHJcblx0XHRcdCggMCA9PSBjaGFydC5kYXRhLmRhdGFzZXRzLmxlbmd0aCApIHx8XHJcblx0XHRcdCggcG9zLnggPCBzY2FsZVgubGVmdCB8fCBwb3MueCA+IHNjYWxlWC5yaWdodCApO1xyXG5cclxuXHRcdGlmKCBzaG91bGRJZ25vcmUgKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGx3ID0gMC44O1xyXG5cdFx0Y29uc3QgeCA9IFBpeGVsSGVscGVyLmFsaWduUGl4ZWwoIGNoYXJ0LCBwb3MueCwgbHcgKVxyXG5cdFx0Y29uc3QgeTEgPSBQaXhlbEhlbHBlci5hbGlnblBpeGVsKCBjaGFydCwgc2NhbGVZQS50b3AsIGx3IClcclxuXHRcdGNvbnN0IHkyID0gUGl4ZWxIZWxwZXIuYWxpZ25QaXhlbCggY2hhcnQsIHNjYWxlWUEuYm90dG9tLCBsdyApXHJcblxyXG5cdFx0Y29udGV4dC5iZWdpblBhdGgoKTtcclxuXHRcdGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODAwMTVcIjtcclxuXHRcdGNvbnRleHQubGluZVdpZHRoID0gbHc7XHJcblx0XHRjb250ZXh0Lm1vdmVUbyggeCwgeTEgKTtcclxuXHRcdGNvbnRleHQubGluZVRvKCB4LCB5Mik7XHJcblx0XHRjb250ZXh0LnN0cm9rZSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0TW91c2VQb3MoY2FudmFzLCBldnQpIHtcclxuXHRcdGlmKCAhZXZ0ICl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcbiAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxyXG4gICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICB9O1xyXG5cdH1cclxuXHJcbn0iXX0=