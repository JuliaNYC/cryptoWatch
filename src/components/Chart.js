import React from 'react'
import { BarChart, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
import * as scale from 'd3-scale'

const Chart = (props) => {
console.warn(props, props.sevenDays)
  //  render() {

        const data = [
            {
                value: parseInt(props.oneHrs),
                label: '1 Hour',
            },
            {
                value: parseInt(props.oneDay),
                label: '24 Hours',
            },
            {
                value: parseInt(props.sevenDays),
                label: '7 Days',
            }
        ]



        return (
            <View style={{ height: 200, padding: 20 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    yAccessor={ ({ item }) => item.value }
                    xAccessor={ ({ item }) => item.label }

                    gridMin={0}
                    svg={{ fill: 'rgb(134, 65, 244)' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    xAccessor={({ item }) => item.label}
                    scale={scale.scaleBand}
                    formatLabel={(_, index) => data[ index ].label}
                    labelStyle={ { color: 'black' } }
                />
            </View>
        )
 //   }

}

export default Chart;
