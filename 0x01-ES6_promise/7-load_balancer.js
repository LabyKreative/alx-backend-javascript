// A function named loadBalancer, that accepts 2 arguments
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}
