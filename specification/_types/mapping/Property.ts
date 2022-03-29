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

import { Dictionary } from '@spec_utils/Dictionary'
import { Metadata, PropertyName } from '@_types/common'
import { integer } from '@_types/Numeric'
import {
  AggregateMetricDoubleProperty,
  DenseVectorProperty,
  FlattenedProperty
} from './complex'
import {
  CoreProperty,
  JoinProperty,
  PercolatorProperty,
  RankFeatureProperty,
  RankFeaturesProperty
} from './core'
import { DynamicMapping } from './dynamic-template'
import {
  ConstantKeywordProperty,
  FieldAliasProperty,
  HistogramProperty
} from './specialized'

export class PropertyBase {
  local_metadata?: Metadata
  meta?: Dictionary<string, string>
  name?: PropertyName
  properties?: Dictionary<PropertyName, Property>
  ignore_above?: integer
  dynamic?: DynamicMapping
  fields?: Dictionary<PropertyName, Property>
}

/** @variants internal tag='type' default='object' */
export type Property =
  | FlattenedProperty
  | JoinProperty
  | PercolatorProperty
  | RankFeatureProperty
  | RankFeaturesProperty
  | ConstantKeywordProperty
  | FieldAliasProperty
  | HistogramProperty
  | DenseVectorProperty
  | AggregateMetricDoubleProperty
  | CoreProperty

export enum FieldType {
  none,
  geo_point,
  geo_shape,
  ip,
  binary,
  keyword,
  text,
  search_as_you_type,
  date,
  date_nanos,
  boolean,
  completion,
  nested,
  object,
  murmur3,
  token_count,
  percolator,
  integer,
  long,
  short,
  byte,
  float,
  half_float,
  scaled_float,
  double,
  integer_range,
  float_range,
  long_range,
  double_range,
  date_range,
  ip_range,
  alias,
  join,
  rank_feature,
  rank_features,
  flattened,
  shape,
  histogram,
  constant_keyword,
  aggregate_metric_double,
  dense_vector,
  match_only_text
}

export class PropertyWithClrOrigin {}
