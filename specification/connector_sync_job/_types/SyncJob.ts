/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Id } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

import {
  ConnectorConfiguration,
  FilteringConfig,
  IngestPipelineParams,
  SyncStatus
} from '../../connector/_types/Connector'

export enum SyncJobType {
  full,
  incremental,
  access_control
}

export enum TriggerMethod {
  on_demand,
  scheduled
}

interface SyncJobConnector {
  configuration: ConnectorConfiguration
  filtering: FilteringConfig[]
  id: Id
  index_name: string
  language?: string
  pipeline: IngestPipelineParams
  service_type: string
}

export interface ConnectorSyncJob {
  cancelation_requested_at?: string
  canceled_at?: string
  completed_at?: string
  connector: SyncJobConnector
  created_at: string
  deleted_document_count: number
  error: string | null
  id: Id
  indexed_document_count: number
  indexed_document_volume: number
  job_type: SyncJobType
  last_seen?: string
  metadata: Dictionary<string, UserDefinedValue>
  started_at?: string
  status: SyncStatus
  total_document_count?: number
  trigger_method: TriggerMethod
  worker_hostname?: string
}
