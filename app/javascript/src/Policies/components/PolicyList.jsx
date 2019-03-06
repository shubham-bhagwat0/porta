// @flow

import * as React from 'react'
import { PolicyTile } from 'Policies/components/PolicyTile'
import 'Policies/styles/policies.scss'
import type {RegistryPolicy} from 'Policies/types/Policies'

const policyEditLink = (name: string, version: string): string => `/p/admin/registry/policies/${name}-${version}/edit`

const navigateToEditPolicy = (url: string, win: any = window) => {
  win.location.href = url
  win.history.pushState({}, '', url)
}

const PolicyList = function ({policies}: {policies: Array<RegistryPolicy>}): React.Node {
  return (
    <ul className='list-group PolicyList'>
      {policies.map((policy, index) => (
        <li className="Policy" key={index}><PolicyTile
          edit={() => navigateToEditPolicy(policyEditLink(policy.name, policy.version))}
          policy={policy}
        /></li>
      ))}
    </ul>
  )
}

export {
  PolicyList,
  policyEditLink,
  navigateToEditPolicy
}
