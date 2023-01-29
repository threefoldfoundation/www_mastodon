function C(e){throw new Error(e)}function d(e){Object.keys(e).length===0&&C("[Object] must contain at least 1 field.");for(const t in e)e[t]instanceof Object?d(e[t]):e[t]!==!0&&C(`Expected "${t}" of type [true | string] but got [${typeof e[t]}]`)}function y(e){(e===""||e===void 0||e===null)&&C(`Expected a valid [ID] but got [${e}].`)}const $={nodes:"nodesConnection",accounts:"accountsConnection",burnTransactions:"burnTransactionsConnection",cities:"citiesConnection",contractBillReports:"contractBillReportsConnection",contractResources:"contractResourcesConnection",countries:"countriesConnection",entityProofs:"entityProofsConnection",farmingPolicies:"farmingPoliciesConnection",farms:"farmsConnection",historicalBalances:"historicalBalancesConnection",interfaces:"interfacesConnection",locations:"locationsConnection",mintTransactions:"mintTransactionsConnection",nameContracts:"nameContractsConnection",nodeContracts:"nodeContractsConnection",nodeResourcesTotals:"nodeResourcesTotalsConnection",nruConsumptions:"nruConsumptionsConnection",pricingPolicies:"pricingPoliciesConnection",publicConfigs:"publicConfigsConnection",publicIps:"publicIpsConnection",refundTransactions:"refundTransactionsConnection",rentContracts:"rentContractsConnection",solutionProviders:"solutionProvidersConnection",transfers:"transfersConnection",twins:"twinsConnection",uptimeEvents:"uptimeEventsConnection"},B={nodesConnection:"Node",accountsConnection:"Account",burnTransactionsConnection:"BurnTransaction",citiesConnection:"City",contractBillReportsConnection:"ContractBillReport",contractResourcesConnection:"ContractResources",countriesConnection:"Country",entityProofsConnection:"EntityProof",farmingPoliciesConnection:"FarmingPolicy",farmsConnection:"Farm",historicalBalancesConnection:"HistoricalBalance",interfacesConnection:"Interfaces",locationsConnection:"Location",mintTransactionsConnection:"MintTransaction",nameContractsConnection:"NameContract",nodeContractsConnection:"NodeContract",nodeResourcesTotalsConnection:"NodeResourcesTotal",nruConsumptionsConnection:"NruConsumption",pricingPoliciesConnection:"PricingPolicy",publicConfigsConnection:"PublicConfig",publicIpsConnection:"PublicIp",refundTransactionsConnection:"RefundTransaction",rentContractsConnection:"RentContract",solutionProvidersConnection:"SolutionProvider",transfersConnection:"Transfer",twinsConnection:"Twin",uptimeEventsConnection:"UptimeEvent"};class c{_list(t){d(t.fields);const{name:n,entity:o,limit:r,offset:i,orderBy:s,where:u,fields:l}=t,p=`
      ${n}(
        limit: $limit${n},
        offset: $offset${n},
        orderBy: $orderBy${n},
        where: $where${n},
      ) {
        ${c.normalizeFields(l)}
      }
    `;return{name:n,parameters:[`$limit${n}: Int`,`$offset${n}: Int`,`$orderBy${n}: [${o}OrderByInput]`,`$where${n}: ${o}WhereInput`],query:p,variables:{[`limit${n}`]:r,[`offset${n}`]:i,[`orderBy${n}`]:s,[`where${n}`]:u}}}_byId(t,n,o){y(t),d(n);const r=`
      ${o}(id: $id${o}) {
        ${c.normalizeFields(n)}
      }
    `;return{name:o,parameters:[`$id${o}: ID!`],query:r,variables:{[`id${o}`]:t}}}_connection(t,n,o){d(t);const r=B[o],i=[`$after${o}: String`,`$first${o}: Int`,`$orderBy${o}: [${r}OrderByInput!]!`,`$where${o}: ${r}WhereInput`],s=`
      ${o}(
        after: $after${o},
        first: $first${o},
        orderBy: $orderBy${o},
        where: $where${o}
      ) {
        ${c.normalizeFields(t)}
      }
    `;return{name:o,query:s,parameters:i,variables:{[`after${o}`]:n.after,[`first${o}`]:n.first,[`orderBy${o}`]:n.orderBy,[`where${o}`]:n.where}}}static normalizeFields(t){return Object.entries(t).reduce((n,[o,r])=>(n.push(r===!0?o:`${o}{${c.normalizeFields(r)}}`),n),[]).join(",")}}const I={Node:"nodes",Account:"accounts",BurnTransaction:"burnTransactions",City:"cities",ContractBillReport:"contractBillReports",ContractResources:"contractResources",Country:"countries",EntityProof:"entityProofs",FarmingPolicy:"farmingPolicies",Farm:"farms",HistoricalBalance:"historicalBalances",Interfaces:"interfaces",Location:"locations",MintTransaction:"mintTransactions",NameContract:"nameContracts",NodeContract:"nodeContracts",NodeResourcesTotal:"nodeResourcesTotals",NruConsumption:"nruConsumptions",PricingPolicy:"pricingPolicies",PublicConfig:"publicConfigs",PublicIp:"publicIps",RefundTransaction:"refundTransactions",RentContract:"rentContracts",SolutionProvider:"solutionProviders",Transfer:"transfers",Twin:"twins",UptimeEvent:"uptimeEvents"},m={nodes:"nodeById",accounts:"accountById",burnTransactions:"burnTransactionById",cities:"cityById",contractBillReports:"contractBillReportById",contractResources:"contractResourcesById",countries:"countryById",entityProofs:"entityProofById",farmingPolicies:"farmingPolicyById",farms:"farmById",historicalBalances:"historicalBalanceById",interfaces:"interfacesById",locations:"locationById",mintTransactions:"mintTransactionById",nameContracts:"nameContractById",nodeContracts:"nodeContractById",nodeResourcesTotals:"nodeResourcesTotalById",nruConsumptions:"nruConsumptionById",pricingPolicies:"pricingPolicyById",publicConfigs:"publicConfigById",publicIps:"publicIpById",refundTransactions:"refundTransactionById",rentContracts:"rentContractById",solutionProviders:"solutionProviderById",transfers:"transferById",twins:"twinById",uptimeEvents:"uptimeEventById"};var f;(function(e){e.Dev="dev",e.Test="test",e.Qa="qa",e.Main="main"})(f||(f={}));class a extends c{constructor(t){super(),this.__uri=t===f.Main?"https://graphql.grid.tf/graphql":`https://graphql.${t}.grid.tf/graphql`}async _request(t){const{name:n,parameters:o,query:r,variables:i}=t,s=o&&o.length?`(${o.join(", ")})`:"",u=await fetch(this.__uri,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:`
          query TFGridClientQuery${s} {
            ${r}
          }
        `,variables:i})}),{data:l}=await u.json();return n?l[n]:l}merge(t){const n=[];for(const r in t)n.push(this[`__${r}`].apply(this,t[r]));const o=n.reduce((r,{parameters:i,query:s,variables:u})=>(r.parameters=[...r.parameters,...i],r.query+=` ${s}`,r.variables=Object.assign(Object.assign({},r.variables),u),r),{name:null,parameters:[],query:"",variables:{}});return this._request(o)}}for(const[e,t]of Object.entries(I))Object.defineProperty(a.prototype,`__${t}`,{value(n,o){return this._list(Object.assign({name:t,entity:e,fields:n},o))}}),Object.defineProperty(a.prototype,t,{value(n,o){return this._request(this[`__${t}`](n,o))}});for(const e of Object.values(m))Object.defineProperty(a.prototype,`__${e}`,{value(t,n){return this._byId(t,n,e)}}),Object.defineProperty(a.prototype,e,{value(t,n){return this._request(this[`__${e}`](t,n))}});for(const e of Object.values($))Object.defineProperty(a.prototype,`__${e}`,{value(t,n){return this._connection(t,n,e)}}),Object.defineProperty(a.prototype,e,{value(t,n){return this._request(this[`__${e}`](t,n))}});export{f as Networks,a as default};
