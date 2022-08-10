import { defineStore } from 'pinia'
// 控制fetch的store
export const fetchStore = defineStore('fetch', {
  state: () => ({
    sessionId: '',
    consumerId: '',
    requestId: '',
    online:false
  }),
  getters: {
    getRequest: (state) => (option: ArthasReq) => {
      const req = new Request("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: state.sessionId,
          consumerId: state.consumerId,
          requestId: state.requestId,
          ...option,
        })
      })
      return req
    }
  }
})
