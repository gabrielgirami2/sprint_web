/*
 * api_java_gfvcorp API
 * api_java_gfvcorp API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * RresponseClient
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-13T13:06:09.898871600-03:00[America/Sao_Paulo]")
public class RresponseClient {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_SITUATION = "situation";
  @SerializedName(SERIALIZED_NAME_SITUATION)
  private Boolean situation;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_CPF = "cpf";
  @SerializedName(SERIALIZED_NAME_CPF)
  private String cpf;

  public static final String SERIALIZED_NAME_CNH = "cnh";
  @SerializedName(SERIALIZED_NAME_CNH)
  private String cnh;

  public static final String SERIALIZED_NAME_EMAIL = "email";
  @SerializedName(SERIALIZED_NAME_EMAIL)
  private String email;

  public static final String SERIALIZED_NAME_PASSWORD = "password";
  @SerializedName(SERIALIZED_NAME_PASSWORD)
  private String password;

  public RresponseClient() {
  }

  public RresponseClient id(Integer id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getId() {
    return id;
  }


  public void setId(Integer id) {
    this.id = id;
  }


  public RresponseClient situation(Boolean situation) {
    
    this.situation = situation;
    return this;
  }

   /**
   * Get situation
   * @return situation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getSituation() {
    return situation;
  }


  public void setSituation(Boolean situation) {
    this.situation = situation;
  }


  public RresponseClient name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public RresponseClient cpf(String cpf) {
    
    this.cpf = cpf;
    return this;
  }

   /**
   * Get cpf
   * @return cpf
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getCpf() {
    return cpf;
  }


  public void setCpf(String cpf) {
    this.cpf = cpf;
  }


  public RresponseClient cnh(String cnh) {
    
    this.cnh = cnh;
    return this;
  }

   /**
   * Get cnh
   * @return cnh
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getCnh() {
    return cnh;
  }


  public void setCnh(String cnh) {
    this.cnh = cnh;
  }


  public RresponseClient email(String email) {
    
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getEmail() {
    return email;
  }


  public void setEmail(String email) {
    this.email = email;
  }


  public RresponseClient password(String password) {
    
    this.password = password;
    return this;
  }

   /**
   * Get password
   * @return password
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPassword() {
    return password;
  }


  public void setPassword(String password) {
    this.password = password;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RresponseClient rresponseClient = (RresponseClient) o;
    return Objects.equals(this.id, rresponseClient.id) &&
        Objects.equals(this.situation, rresponseClient.situation) &&
        Objects.equals(this.name, rresponseClient.name) &&
        Objects.equals(this.cpf, rresponseClient.cpf) &&
        Objects.equals(this.cnh, rresponseClient.cnh) &&
        Objects.equals(this.email, rresponseClient.email) &&
        Objects.equals(this.password, rresponseClient.password);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, situation, name, cpf, cnh, email, password);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RresponseClient {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    situation: ").append(toIndentedString(situation)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    cpf: ").append(toIndentedString(cpf)).append("\n");
    sb.append("    cnh: ").append(toIndentedString(cnh)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("id");
    openapiFields.add("situation");
    openapiFields.add("name");
    openapiFields.add("cpf");
    openapiFields.add("cnh");
    openapiFields.add("email");
    openapiFields.add("password");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to RresponseClient
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (RresponseClient.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in RresponseClient is not found in the empty JSON string", RresponseClient.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!RresponseClient.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `RresponseClient` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("cpf") != null && !jsonObj.get("cpf").isJsonNull()) && !jsonObj.get("cpf").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `cpf` to be a primitive type in the JSON string but got `%s`", jsonObj.get("cpf").toString()));
      }
      if ((jsonObj.get("cnh") != null && !jsonObj.get("cnh").isJsonNull()) && !jsonObj.get("cnh").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `cnh` to be a primitive type in the JSON string but got `%s`", jsonObj.get("cnh").toString()));
      }
      if ((jsonObj.get("email") != null && !jsonObj.get("email").isJsonNull()) && !jsonObj.get("email").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `email` to be a primitive type in the JSON string but got `%s`", jsonObj.get("email").toString()));
      }
      if ((jsonObj.get("password") != null && !jsonObj.get("password").isJsonNull()) && !jsonObj.get("password").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `password` to be a primitive type in the JSON string but got `%s`", jsonObj.get("password").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RresponseClient.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RresponseClient' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RresponseClient> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RresponseClient.class));

       return (TypeAdapter<T>) new TypeAdapter<RresponseClient>() {
           @Override
           public void write(JsonWriter out, RresponseClient value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public RresponseClient read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of RresponseClient given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of RresponseClient
  * @throws IOException if the JSON string is invalid with respect to RresponseClient
  */
  public static RresponseClient fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RresponseClient.class);
  }

 /**
  * Convert an instance of RresponseClient to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
