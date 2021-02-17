import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';
import registryMoonbase from '@balancer-labs/assets/generated/pm/registry.moonbase.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import moonbase from '@/config/moonbase.json';

const configs = { homestead, kovan, moonbase };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.moonbase = merge(registryMoonbase, configs.moonbase);
const network = process.env.VUE_APP_NETWORK || 'moonbase';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
