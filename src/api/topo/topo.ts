import request from "@/utils/request";

enum API {
  GET_TOPO_URL = "/topo/get_topo",
}

export const GetTopo = () => request.get(API.GET_TOPO_URL);
