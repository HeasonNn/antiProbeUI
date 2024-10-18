<template>
    <div class="full-screen">
        <v-chart :option="chartOptions" ref="chartRef"></v-chart>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type EChartsType } from 'echarts/core';

const ICONS = {
    PC: 'image://src/assets/icons/PC.png',
    SWITCH: 'image://src/assets/icons/Switch.png',
    ROUTER: 'image://src/assets/icons/Router.png',
    DB: 'image://src/assets/icons/DB.png',
    DC: 'image://src/assets/icons/DC.png',
};

const chartOptions = ref({
    title: {
        text: '网络拓扑图',
    },
    tooltip: {},
    series: [
        {
            type: 'graph',
            layout: 'force', // 使用力导向布局
            symbolSize: 40,  // 节点大小
            roam: true,      // 支持缩放和平移
            label: {
                show: true,    // 显示节点名称
                fontSize: 10,
            },
            edgeSymbol: ['circle', 'circle'],
            edgeSymbolSize: [4, 4], // 边线箭头样式
            force: {
                repulsion: 800, // 节点间的排斥力
            },
            // 节点与节点之间的连接关系
            edges: [
                { source: '主机1', target: '交换机' },
                { source: '主机2', target: '交换机' },
                { source: '交换机', target: '路由器' },
                { source: '路由器', target: '主机3' },
            ],
            // 定义节点数据
            data: [
                { name: '主机1', symbol: ICONS.PC },
                { name: '主机2', symbol: ICONS.PC },
                { name: '交换机', symbol: ICONS.SWITCH },
                { name: '路由器', symbol: ICONS.ROUTER },
                { name: '主机3', symbol: ICONS.PC },
            ],
        },
    ],
});

const chartRef = ref<EChartsType | null>(null);

onMounted(() => {
    const resizeChart = () => {
        if (chartRef.value) {
            chartRef.value.resize();
        }
    };
    window.addEventListener('resize', resizeChart);
});

</script>

<style scoped lang="scss">
.full-screen {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>