import React, { useState, useMemo, memo } from "react";
import {
  MapPin,
  Server,
  Zap,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";

const DeviceHierarchy = memo(function DeviceHierarchy({
  location,
  selectedMeterId,
  onSelectMeter,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Track expanded state of nodes
  const [expandedNodes, setExpandedNodes] = useState({
    loc: true,
    "GW-DEL-01": true,
    "GW-DEL-02": true,
    "GW-DEL-03": false,
    "DCU-DEL-101": true,
    "DCU-DEL-021": true,
    "DCU-DEL-022": false,
    "DCU-DEL-023": false,
    "DCU-DEL-031": false,
    "GW-MUM-01": true,
    "DCU-MUM-011": true,
  });

  const toggleNode = (nodeId) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  // Filter hierarchy based on search query
  const filteredLocation = useMemo(() => {
    if (!location) return null;
    if (!searchQuery.trim()) return location;

    const query = searchQuery.toLowerCase();
    const matchesLoc = location.name.toLowerCase().includes(query);

    const filteredGateways = (location.gateways || [])
      .map((gw) => {
        const matchesGw = gw.name.toLowerCase().includes(query);
        const filteredDcus = (gw.dcus || [])
          .map((dcu) => {
            const matchesDcu = dcu.name.toLowerCase().includes(query);
            const filteredMeters = (dcu.meters || []).filter(
              (m) =>
                m.name.toLowerCase().includes(query) ||
                m.id.toLowerCase().includes(query) ||
                m.model?.toLowerCase().includes(query) ||
                m.serialNo?.toLowerCase().includes(query)
            );

            if (matchesLoc || matchesGw || matchesDcu || filteredMeters.length > 0) {
              return {
                ...dcu,
                meters: matchesDcu || matchesGw || matchesLoc ? dcu.meters : filteredMeters,
              };
            }
            return null;
          })
          .filter(Boolean);

        if (matchesLoc || matchesGw || filteredDcus.length > 0) {
          return {
            ...gw,
            dcus: filteredDcus,
          };
        }
        return null;
      })
      .filter(Boolean);

    return {
      ...location,
      gateways: filteredGateways,
    };
  }, [location, searchQuery]);

  if (!filteredLocation) return null;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-2xs space-y-3">
      {/* Title */}
      <h2 className="text-xs font-bold text-slate-900 tracking-tight">
        Device Hierarchy
      </h2>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search devices..."
          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
      </div>

      {/* Tree Hierarchy */}
      <div className="text-xs font-medium text-slate-700 space-y-1 select-none pt-1">
        {/* Location Level */}
        <div
          className="flex items-center justify-between py-1 px-1 rounded-md cursor-pointer hover:bg-slate-50 transition-colors"
          onClick={() => toggleNode("loc")}
        >
          <div className="flex items-center gap-1.5">
            {expandedNodes["loc"] !== false ? (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            )}
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-bold text-slate-900">{filteredLocation.name}</span>
          </div>
        </div>

        {/* Gateways Loop */}
        {expandedNodes["loc"] !== false && (
          <div className="pl-3.5 border-l border-slate-200 ml-2.5 space-y-1.5 pt-0.5">
            {filteredLocation.gateways?.map((gw) => {
              const isGwExpanded = expandedNodes[gw.id] !== false || searchQuery.trim().length > 0;
              const hasDcus = gw.dcus && gw.dcus.length > 0;

              return (
                <div key={gw.id} className="space-y-1">
                  {/* Gateway Header */}
                  <div
                    onClick={() => hasDcus && toggleNode(gw.id)}
                    className="flex items-center justify-between py-1 px-1.5 rounded-md cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      {hasDcus ? (
                        isGwExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )
                      ) : (
                        <span className="w-3.5" />
                      )}
                      <Server className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="font-semibold text-slate-800 truncate">
                        {gw.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mr-1" />
                  </div>

                  {/* DCUs Loop */}
                  {isGwExpanded && hasDcus && (
                    <div className="pl-3.5 border-l border-slate-200 ml-2 space-y-1 pt-0.5">
                      {gw.dcus?.map((dcu) => {
                        const isDcuExpanded = expandedNodes[dcu.id] !== false || searchQuery.trim().length > 0;
                        const hasMeters = dcu.meters && dcu.meters.length > 0;

                        return (
                          <div key={dcu.id} className="space-y-1">
                            {/* DCU Header */}
                            <div
                              onClick={() => hasMeters && toggleNode(dcu.id)}
                              className="flex items-center justify-between py-1 px-1.5 rounded-md cursor-pointer hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                {hasMeters ? (
                                  isDcuExpanded ? (
                                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  ) : (
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  )
                                ) : (
                                  <span className="w-3.5" />
                                )}
                                <Zap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                <span className="font-medium text-slate-700 truncate">
                                  {dcu.name}
                                </span>
                              </div>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mr-1" />
                            </div>

                            {/* Meters Loop */}
                            {isDcuExpanded && hasMeters && (
                              <div className="pl-3.5 border-l border-slate-200 ml-2 space-y-0.5 pt-0.5">
                                {dcu.meters?.map((m) => {
                                  const isSelected = m.id === selectedMeterId;

                                  return (
                                    <div
                                      key={m.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onSelectMeter?.(m.id);
                                      }}
                                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs cursor-pointer transition-colors duration-100 ${
                                        isSelected
                                          ? "bg-blue-50 text-blue-600 font-semibold border border-blue-200 shadow-2xs"
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                        <span className="truncate">{m.name}</span>
                                      </div>
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
});

export default DeviceHierarchy;
