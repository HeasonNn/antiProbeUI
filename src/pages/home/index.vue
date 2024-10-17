<template>
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page.</p>
    </div>

    <div>
        <el-button type="primary" plain @click="doreqControlPageHome">test get_info</el-button>
    </div>

</template>

<script setup lang="ts">
import type { ReqTopoInfo } from "@/types";
import { reqControlPageHome } from "@/api/home";

const doreqControlPageHome = async () => {
    const req: ReqTopoInfo = {
        name: "1",
        game_type: 1
    };
    return await reqControlPageHome(req);
}

</script>



<style scoped lang="scss">
h1 {
    color: blue;
}
</style>