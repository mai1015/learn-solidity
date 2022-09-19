import {network} from "hardhat";

export default async function deployFunc(hre: any) {
    const { getNamedAccounts, deployments } = hre;
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    const priceAddress = "";

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [priceAddress]
    })
    console.log("");
}